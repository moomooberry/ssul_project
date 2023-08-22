import { FC, KeyboardEventHandler, useCallback, useRef, useState } from "react";
import AdminFormView, {
  AdminFormFields,
  AdminFormViewProps,
} from "./AdminFormView";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import addPost from "@/api/post/addPost";
import { useRouter } from "next/router";
import editPost from "@/api/post/editPost";
import { GetDetailPostResponse } from "@/types/api/post/getDetailPost";
import getDetailPost from "@/api/post/getDetailPost";
import useAppSelector from "@/hooks/useAppSelector";
import getAccessToken from "@/api/auth/getAccessToken";
import useAppDispatch from "@/hooks/useAppDispatch";
import { setToken } from "@/store/modules/auth";

interface AdminFormControllerProps {
  id?: string;
  initialData?: GetDetailPostResponse;
}

const AdminFormController: FC<AdminFormControllerProps> = ({
  id,
  initialData,
}) => {
  const [hashtags, setHashtags] = useState<string[]>(
    initialData?.hashtags ?? []
  );

  const hashtagRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const { token } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const queryClient = useQueryClient();

  const { data } = useQuery(
    [
      "/post/detail",
      {
        id,
      },
    ],
    ({ queryKey: [_, params] }) =>
      getDetailPost({
        id: id as string,
        accessToken: token,
      }),
    { enabled: !!id, initialData, staleTime: Infinity }
  );

  const addMutation = useMutation({
    mutationFn: addPost,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["/post"] });
      router.push("/admin");
    },
  });

  const editMutation = useMutation({
    mutationFn: editPost,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["/post"] });
      await queryClient.invalidateQueries({
        queryKey: [
          "/post/detail",
          {
            id: id as string,
          },
        ],
      });
      router.push("/admin");
    },
  });

  const { register, handleSubmit, watch } = useForm<AdminFormFields>({
    // @@ 일단 이미지 및 카테고리 보류
    defaultValues: {
      title: data?.title,
      imgSrc: undefined,
      link: data?.link,
    },
  });

  const titleValue = watch("title");

  const linkValue = watch("link");

  const onHashtagKeyDown = useCallback<KeyboardEventHandler<HTMLInputElement>>(
    (e) => {
      if (e.key === "Enter") {
        const value = e.currentTarget.value.replaceAll("#", "");
        const isComposing = e.nativeEvent.isComposing;
        if (!value || isComposing) return;
        setHashtags((prev) => [...prev, `#${value}`]);
        if (hashtagRef.current) hashtagRef.current.value = "";
      }
    },
    []
  );

  const onHashtagDeleteClick = useCallback((index: number) => {
    const onClick = () => {
      setHashtags((prev) => {
        const arr = [...prev];
        arr.splice(index, 1);
        return arr;
      });
    };
    return onClick;
  }, []);

  const onValid = useCallback<SubmitHandler<AdminFormFields>>(
    async ({ title, link, imgSrc }) => {
      if (!id) {
        // @@ 일단 이미지 및 카테고리 보류
        // console.log("imgSrc", imgSrc?.item(0));
        addMutation.mutate(
          {
            title,
            link,
            imgSrc: undefined,
            hashtags,
            author: "관리자",
            category: "ssul",
            accessToken: token,
          },
          {
            // accessToken 없거나 유효하지 않을 시
            onError: async (_, variables) => {
              const accessToken = await getAccessToken({ refreshToken: "" });
              dispatch(setToken(accessToken));
              try {
                await addMutation.mutateAsync({ ...variables, accessToken });
              } catch (e) {
                router.push("/auth/login");
              }
            },
          }
        );
      } else {
        editMutation.mutate(
          {
            id,
            title,
            link,
            imgSrc: undefined,
            hashtags,
            author: "관리자",
            category: "ssul",
            accessToken: token,
          },
          {
            // accessToken 없거나 유효하지 않을 시
            onError: async (_, variables) => {
              const accessToken = await getAccessToken({ refreshToken: "" });
              dispatch(setToken(accessToken));
              try {
                await editMutation.mutateAsync({ ...variables, accessToken });
              } catch (e) {
                router.push("/auth/login");
              }
            },
          }
        );
      }
    },
    [addMutation, dispatch, editMutation, hashtags, id, router, token]
  );

  const viewProps: AdminFormViewProps = {
    id,
    data: data ?? initialData,
    register: {
      title: register("title"),
      link: register("link"),
      imgSrc: register("imgSrc"),
    },
    onSubmitClick: handleSubmit(onValid),
    hashtags,
    hashtagRef,
    onHashtagKeyDown,
    onHashtagDeleteClick,
    isSubmitDisabled: !titleValue || !linkValue,
  };

  return <AdminFormView {...viewProps} />;
};

export default AdminFormController;
