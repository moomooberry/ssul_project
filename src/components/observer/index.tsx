import { FC, PropsWithChildren, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

const Layout = styled.div<{ $minHeight?: string }>`
  width: 100%;
  min-height: ${({ $minHeight }) => $minHeight};
`;

export interface ObserverProps {
  onObserve?: () => void;
  onUnObserve?: () => void;
  minHeight?: string;
  config: IntersectionObserverInit;
}

const Observer: FC<PropsWithChildren<ObserverProps>> = ({
  children,
  onObserve,
  onUnObserve,
  minHeight,
  config,
}) => {
  const observerRef = useRef<HTMLDivElement>(null);

  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting) {
        if (onObserve) onObserve();
      } else {
        if (onUnObserve) onUnObserve();
      }
    },
    [onObserve, onUnObserve]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(callback, config);
    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [callback, config]);

  return (
    <Layout $minHeight={minHeight} ref={observerRef}>
      {children}
    </Layout>
  );
};

export default Observer;
