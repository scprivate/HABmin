define([
        "dojo/_base/declare",
        "dojo/_base/lang",

        "dojox/layout/TableContainer",

        "dijit/form/ValidationTextBox",
        "dijit/form/NumberSpinner",
        "dijit/form/Select",
        "app/dashboard/SaveChart/ColorSelectButton",

        "dojo/i18n!app/nls/SaveChart"
    ],
    function (declare, lang, TableContainer, TextBox, NumberSpinner, Select, ColorButton, langSaveChart) {

        return declare([TableContainer], {
            cols: 1,
            labelWidth: "150",

            postCreate: function () {
                this.inherited(arguments);
                var childStyle = "width:98%";

                this.labelEditor = new TextBox({
                    label: langSaveChart.Label
                });
                this.formatEditor = new TextBox({
                    label: langSaveChart.Format
                });
                this.colorEditor = new ColorButton({
                    label: langSaveChart.Color,
                    style: childStyle,
                    colorValue: this.cfgLineColor
                });
                this.minimumEditor = new NumberSpinner({
                    label: langSaveChart.Minimum
                });
                this.maximumEditor = new NumberSpinner({
                    label: langSaveChart.Maximum
                });
                this.positionEditor = new Select({
                    label: langSaveChart.Position
                });

                this.addChild(this.labelEditor);
                this.addChild(this.formatEditor);
                this.addChild(this.colorEditor);
                this.addChild(this.minimumEditor);
                this.addChild(this.maximumEditor);
                this.addChild(this.positionEditor);
            }

        })
    });
