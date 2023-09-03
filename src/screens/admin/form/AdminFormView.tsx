import { FC, KeyboardEventHandler, MouseEventHandler, RefObject } from "react";
import UI from "./components/styled";
import Button from "@/components/button";
import { UseFormRegisterReturn } from "react-hook-form";
import HashtagBadge from "@/components/badge/HashtagBadge";
import { GetDetailPostResponse } from "@/types/api/post/getDetailPost";

export interface AdminFormFields {
  title: string;
  link: string;
  imgSrc?: FileList | string;
}

export interface AdminFormViewProps {
  id?: string;
  data?: GetDetailPostResponse;
  register: { [K in keyof AdminFormFields]: UseFormRegisterReturn };
  hashtagRef: RefObject<HTMLInputElement>;
  hashtags: string[];
  onHashtagKeyDown: KeyboardEventHandler<HTMLInputElement>;
  onHashtagDeleteClick: (index: number) => MouseEventHandler<HTMLDivElement>;
  onSubmitClick: MouseEventHandler<HTMLButtonElement>;
  isSubmitDisabled: boolean;
  isLoading: boolean;
}

const AdminFormView: FC<AdminFormViewProps> = ({
  id,
  data,
  register,
  hashtags,
  hashtagRef,
  onHashtagKeyDown,
  onHashtagDeleteClick,
  onSubmitClick,
  isSubmitDisabled,
  isLoading,
}) => (
  <UI.Layout>
    <UI.Container>
      <UI.Title>
        {id ? `🛠️ ${data?.title} 수정하기` : "📚 SSUL 추가하기"}
      </UI.Title>

      <UI.Box>
        <UI.StlyedLabel>
          <span>
            제목 <span style={{ color: "red" }}>*</span>
          </span>
          <UI.StyledInput {...register.title} />
        </UI.StlyedLabel>
        <UI.StlyedLabel>
          <span>
            링크 <span style={{ color: "red" }}>*</span>
          </span>
          <UI.StyledInput {...register.link} />
        </UI.StlyedLabel>
        <UI.StlyedLabel>
          <span>해시태그</span>
          <UI.StyledInput ref={hashtagRef} onKeyDown={onHashtagKeyDown} />
        </UI.StlyedLabel>
        <UI.HashTagBox>
          <UI.HashTagDesc>❗️enter키로 입력, 3개정도만...</UI.HashTagDesc>
          <UI.HashTagWrapper>
            {hashtags.map((item, index) => (
              <HashtagBadge
                key={index}
                text={item}
                onDeleteClick={onHashtagDeleteClick(index)}
              />
            ))}
          </UI.HashTagWrapper>
        </UI.HashTagBox>
        <UI.StlyedLabel>
          썸네일
          <UI.StyledInput type="file" accept="image/*" {...register.imgSrc} />
        </UI.StlyedLabel>
        <Button
          text="저장"
          isLoading={isLoading}
          onClick={onSubmitClick}
          disabled={isSubmitDisabled}
        />
      </UI.Box>
    </UI.Container>
  </UI.Layout>
);

export default AdminFormView;
