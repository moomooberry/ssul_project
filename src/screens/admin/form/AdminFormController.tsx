import { FC, KeyboardEventHandler, useCallback, useRef, useState } from "react";
import AdminFormView, {
  AdminFormFields,
  AdminFormViewProps,
} from "./AdminFormView";
import { SubmitHandler, useForm } from "react-hook-form";

interface AdminFormControllerProps {
  id?: string;
}

const AdminFormController: FC<AdminFormControllerProps> = ({ id }) => {
  const [hashtags, setHashtags] = useState<string[]>([]);

  const hashtagRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, watch } = useForm<AdminFormFields>();

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
        console.log(arr);
        return arr;
      });
    };
    return onClick;
  }, []);

  const onValid = useCallback<SubmitHandler<AdminFormFields>>(
    ({ title, link, imgSrc }) => {
      console.log("title", title);
      console.log("link", link);
      console.log("hashtags", hashtags);
      console.log("imgSrc", imgSrc?.item(0));
    },
    [hashtags]
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
