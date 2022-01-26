import React, { useEffect, useRef, useState } from 'react';

interface IProps {
  children: React.ReactNode;
  itemHeight?: number;
  visibleOffset?: number;
  root?: HTMLElement | null;
}

const RenderVisible: React.FC<IProps> = ({
  children,
  itemHeight = 250,
  visibleOffset = 1000,
  root,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const placeholderHeight = useRef<number>(itemHeight);
  const intersectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intersectedEl = intersectionRef.current;
    if (intersectedEl) {
      const observer = new IntersectionObserver(
        (entries) => {
          setIsVisible(entries[0].isIntersecting);
        },
        { root, rootMargin: `${visibleOffset}px 0px ${visibleOffset}px 0px` },
      );
      observer.observe(intersectedEl);
      return () => {
        if (intersectedEl) {
          observer.unobserve(intersectedEl);
        }
      };
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, [intersectionRef]);

  useEffect(() => {
    if (intersectionRef.current && isVisible) {
      placeholderHeight.current = intersectionRef.current.offsetHeight;
    }
  }, [isVisible, intersectionRef]);

  return (
    <div ref={intersectionRef}>
      {isVisible ? <>{children}</> : <div style={{ height: placeholderHeight.current }} />}
    </div>
  );
};

export default RenderVisible;
