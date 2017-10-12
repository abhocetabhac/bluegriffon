Components.utils.import("resource://gre/modules/Services.jsm");

RegisterIniter(GridItemssSectionIniter);

function GridItemssSectionIniter(aElt, aRuleset)
{
  var bog = CssInspector.getCascadedValue(aRuleset, "order");
  gDialog.orderTextbox.value = bog;

  var grs = CssInspector.getCascadedValue(aRuleset, "grid-row-start");
  gDialog.gridRowStartBinding.value = grs;
}
