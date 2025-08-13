$w.onReady(function () {
  $w("#subMenuBox").hide();
  $w("#subMenuLiquidCooling").hide();

  $w("#btnProducts").onMouseIn(() => {
    $w("#subMenuBox").show("fade");
  });

  $w("#menuBox").onMouseOut(() => {
    $w("#subMenuBox").hide("fade");
    $w("#subMenuLiquidCooling").hide("fade");
  });

  $w("#btnLiquidCooling").onMouseIn(() => {
    $w("#subMenuLiquidCooling").show("fade");
  });

  $w("#btnLiquidCooling").onMouseOut(() => {
    $w("#subMenuLiquidCooling").hide("fade");
  });
});
