import React, { useMemo, useState, useEffect } from "react";

const joinWbr2StringArray = (ary: string[]) => {
  const res: React.ReactNode[] = ary
    .filter((e) => !!e)
    .flatMap((e, i) => [e, <wbr key={i} />]);
  return res;
};

type TextSegmenterCoreProps = {
  children: string;
  locale: string;
};

const TextSegmenterCore: React.FC<TextSegmenterCoreProps> = ({
  locale,
  children
}) => {
  const segmenter = useMemo(
    () => new Intl.Segmenter(locale, { granularity: "word" }),
    [locale]
  );
  const splittedText = useMemo(() => {
    return Array.from(segmenter.segment(children)).map((s) => s.segment);
  }, [segmenter, children]);

  return <>{joinWbr2StringArray(splittedText)}</>;
};

type Props = {
  children: React.ReactNode;
  locale?: string;
};

const TextSegmenterInner: React.FC<Required<Props>> = ({
  locale,
  children
}) => {
  return (
    <>
      {React.Children.map(children, (child) => {
        if (typeof child === "string")
          return <TextSegmenterCore locale={locale}>{child}</TextSegmenterCore>;
        if (!React.isValidElement(child)) return child;
        if (child.props.children) {
          return React.cloneElement(
            child,
            {},
            <TextSegmenterInner locale={locale}>
              {child.props.children}
            </TextSegmenterInner>
          );
        }
        return child;
      })}
    </>
  );
};

/**
 * A component to split a word by semantics for non-separated sentences like Japanese.
 * @param children [ReactNode] target node
 * @param locale [string] target locale. default is "ja-JP"
 * @return sentences separated by semantics and wrapped with span
 */
export const TextSegmenter: React.FC<Props> = ({
  locale = "ja-JP",
  children
}) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    // two-pass rendering.
    return <>{children}</>;
  }
  if (Intl.Segmenter === undefined) {
    // Intl.Segmenter is unavailable.
    return <>{children}</>;
  }
  if (!Intl.Segmenter.supportedLocalesOf(locale)) {
    // the locale is not supported.
    return <>{children}</>;
  }

  return (
    <span style={{ wordBreak: "keep-all" }}>
      <TextSegmenterInner locale={locale}>{children}</TextSegmenterInner>
    </span>
  );
};

