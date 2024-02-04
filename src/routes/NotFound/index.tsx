import noDataIllustration from "@/assets/images/undraw_no_data_re_kwbl.svg";
import Page from "@/components/Page";

export function Component() {
  return (
    <Page documentTitle="Page not found" className="py-16">
      <div className="contaienr text-center">
        <img src={noDataIllustration} alt="No data" width="648" height="632" className="inline-block w-80 mb-14" />
        <h3 className="text-3xl font-semibold mb-3">Page not found</h3>
        <p>
          The page you are looking for is not found
          <br />
          If you think this is a mistake, please contact site administrators.
        </p>
      </div>
    </Page>
  );
}
