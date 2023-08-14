import { FC, KeyboardEventHandler, useCallback, useRef, useState } from "react";
import AdminFormView, {
  AdminFormFields,
  AdminFormViewProps,
} from "./AdminFormView";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import addPost from "@/api/post/addPost";
import { useRouter } from "next/router";

interface AdminFormControllerProps {
  id?: string;
}

const AdminFormController: FC<AdminFormControllerProps> = ({ id }) => {
  const [hashtags, setHashtags] = useState<string[]>([]);

  const hashtagRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, watch } = useForm<AdminFormFields>();

  const titleValue = watch("title");

  const linkValue = watch("link");

  const router = useRouter();

  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: addPost,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["/post"] });
      router.push("/admin");
    },
  });

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
        console.log(arr);
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
        addMutation.mutate({
          title,
          link,
          imgSrc: undefined,
          hashtags,
          author: "관리자",
          category: "ssul",
        });
      } else {
      }
    },
    [addMutation, hashtags, id]
  );

  const viewProps: AdminFormViewProps = {
    id,
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
