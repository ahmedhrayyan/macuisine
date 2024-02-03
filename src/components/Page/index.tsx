import { HTMLAttributes, useEffect } from "react";

interface IPageProps extends HTMLAttributes<HTMLDivElement> {
  documentTitle?: string;
}

/**
 * A utility component to set the document title on mount.
 * It renders html div element and accept all div element attributes.
 * @param documentTitle - The title of the document. It will be appended with "| Macuisine".
 * If not provided, only "Macuisine" will be set as the document title.
 * @param rest - The rest of the div element attributes.
 */
export default function Page({ documentTitle, ...rest }: IPageProps) {
  useEffect(() => {
    window.document.title = documentTitle ? `${documentTitle} | Macuisine` : "Macuisine";
  }, [documentTitle]);

  return <div {...rest} />;
}
