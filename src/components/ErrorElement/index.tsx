import fixingBugIllustration from "@/assets/images/undraw_fixing_bugs_w7gi.svg";
import Page from "@/components/Page";

export default function ErrorElement() {
  return (
    <Page documentTitle="Page not found" className="py-16">
      <div className="contaienr text-center">
        <img src={fixingBugIllustration} alt="No data" width="690" height="449" className="inline-block w-80 mb-14" />
        <h3 className="text-3xl font-semibold mb-3">Something went wrong</h3>
        <p>
          Something went wrong, details can be found on browser console
          <br />
          Please contact site administrators.
        </p>
      </div>
    </Page>
  );
}
