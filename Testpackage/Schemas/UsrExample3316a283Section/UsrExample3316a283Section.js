define("UsrExample3316a283Section", [], function() {
	return {
		entitySchemaName: "UsrExample",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
                "parentName": "SeparateModeActionButtonsLeftContainer",
                "propertyName": "items",
                "name": "MainContactSectionButton",
                "values": {
                    "itemType": Terrasoft.ViewItemType.BUTTON,
					"style": Terrasoft.controls.ButtonEnums.style.BLUE,
                    "caption": { bindTo: "Resources.Strings.ScannerScoreButton" },
                    "click": { bindTo: "callGetScannerScoreProcess" },
                    "enabled": true,                    
                }
			}
		]/**SCHEMA_DIFF*/,
		methods: {
			callGetScannerScoreProcess: function(){
				var args = {
					sysProcessName: "UsrFirstBP" ,
					parameters: {
                    }
				};
                ProcessModuleUtilities.executeProcess(args);}
		}
	};
});
