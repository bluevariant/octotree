class OcbetreeConstants {}

const GITHUB_TAB_ATTR = "data-ocbetree-tab";

OcbetreeConstants.GITHUB = {
  TAB_ATTR: GITHUB_TAB_ATTR,
  BLOB_CONTAINER: `#js-repo-pjax-container, div[itemtype="http://schema.org/SoftwareSourceCode"] main:not([${GITHUB_TAB_ATTR}]), [data-pjax-container]`,
};
