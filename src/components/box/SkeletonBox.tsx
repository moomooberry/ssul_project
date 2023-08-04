import styled from "styled-components";

const SkeletonBox = styled.div<{ $w?: string; $h?: string }>`
  @keyframes skeletonKeyFrames {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
  width: ${({ $w }) => $w ?? "100%"};
  height: ${({ $h }) => $h ?? "100%"};
  -webkit-animation: skeletonKeyFrames 1.8s infinite ease-in-out;
  animation: skeletonKeyFrames 1.8s infinite ease-in-out;
`;

export default SkeletonBox;
