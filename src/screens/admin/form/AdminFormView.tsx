import { FC, KeyboardEventHandler, MouseEventHandler, RefObject } from "react";
import UI from "./components/styled";
import Button from "@/components/button";
import { UseFormRegisterReturn } from "react-hook-form";
import HashtagBadge from "@/components/badge/HashtagBadge";
import { GetDetailPostResponse } from "@/types/api/post/getDetailPost";
import FilterBadge from "@/components/badge/FilterBadge";
import { CommonCategory } from "@/types/common";

export interface AdminFormFields {
  title: string;
  link: string;
  imgSrc?: FileList | string;
}

export interface AdminFormViewProps {
  id?: string;
  data?: GetDetailPostResponse;
  register: { [K in keyof AdminFormFields]: UseFormRegisterReturn };
  category: CommonCategory;
  onCategoryChange: (value: CommonCategory) => VoidFunction;
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
  category,
  onCategoryChange,

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
        <UI.CategoryBox>
          <span style={{ marginTop: "10px" }}>
            카테고리 <span style={{ color: "red" }}>*</span>
          </span>
          <UI.CategoryBadgeWrapper>
            <FilterBadge
              text="🤡 유머"
              onClick={onCategoryChange("humor")}
              isSelected={category === "humor"}
            />
            <FilterBadge
              text="⚽️ 스포츠"
              onClick={onCategoryChange("sports")}
              isSelected={category === "sports"}
            />
            <FilterBadge
              text="🚨 사건사고"
              onClick={onCategoryChange("accident")}
              isSelected={category === "accident"}
            />
            <FilterBadge
              text="🐶 동물"
              onClick={onCategoryChange("animal")}
              isSelected={category === "animal"}
            />
            <FilterBadge
              text="💸 경제"
              onClick={onCategoryChange("economy")}
              isSelected={category === "economy"}
            />
            <FilterBadge
              text="🎶 연예"
              onClick={onCategoryChange("entertainments")}
              isSelected={category === "entertainments"}
            />
            <FilterBadge
              text="🧹 생활"
              onClick={onCategoryChange("life")}
              isSelected={category === "life"}
            />
            <FilterBadge
              text="💼 정치"
              onClick={onCategoryChange("politics")}
              isSelected={category === "politics"}
            />
          </UI.CategoryBadgeWrapper>
        </UI.CategoryBox>
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
