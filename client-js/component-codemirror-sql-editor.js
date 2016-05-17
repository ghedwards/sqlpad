var $ = require('jquery');
var cm = require('codemirror');

module.exports = function (id) {

    var me = this;
    
    id = id || "codemirror-editor";

    var editor = CodeMirror.fromTextArea(document.getElementById(id), {
        mode: "text/x-sql",
        indentWithTabs: true,
        smartIndent: true,
        lineNumbers: true,
        matchBrackets : true,
        autofocus: true,
        extraKeys: {"Ctrl-Space": "autocomplete"}
        /*,
        hintOptions: {tables: {
          users: {name: null, score: null, birthDate: null},
          countries: {name: null, population: null, size: null}
        }}*/ 
    });

    /*
    <code><a href="?mime=text/x-mysql">text/x-mysql</a></code>,
    <code><a href="?mime=text/x-mariadb">text/x-mariadb</a></code>,
    <code><a href="?mime=text/x-cassandra">text/x-cassandra</a></code>,
    <code><a href="?mime=text/x-plsql">text/x-plsql</a></code>,
    <code><a href="?mime=text/x-mssql">text/x-mssql</a></code>,
    <code><a href="?mime=text/x-hive">text/x-hive</a></code>,
    <code><a href="?mime=text/x-pgsql">text/x-pgsql</a></code>,
    <code><a href="?mime=text/x-gql">text/x-gql</a></code>.
    */
    
    this.addCommand = function (aceCommand) {
        //editor.commands.addCommand(aceCommand);
    };
    
    this.setSchemaTree = function (tree) {

        var hintoptions = {"tables":{}};

        if ( tree.Tables && tree.Tables.dbo ) {
            for ( var t in tree.Tables.dbo) {
                hintoptions.tables[t] = {"columns":{}};
                for ( var c=0, clen = tree.Tables.dbo[t].length; c < clen; c++ ) {
                    hintoptions.tables[t]["columns"][tree.Tables.dbo[t][c].column_name] = {
                        "text":tree.Tables.dbo[t][c].column_name,
                        "displayText":tree.Tables.dbo[t][c].column_name+" "+tree.Tables.dbo[t][c].data_type+" "+((tree.Tables.dbo[t][c].is_nullable==="NO")?"NOT NULL":"NULL")+""
                    };
                }
            }
        }

        editor.setOption("hintOptions",hintoptions);
        //editor.commands.addCommand(aceCommand);
    };
    
    this.getEditorText = function () {
        return editor.getValue();
    };
    
    this.getSelectedOrAllText = function () {
        var relevantText;
        var selectedText = editor.getSelection();
        if (selectedText.length) {
            // get only selected content
            relevantText = selectedText;
        } else {
            // get whole editor content
            relevantText = editor.getValue();
        }
        return relevantText;
    };
    
    this.resize = function () {
        //editor.resize();
    };
    

    $(window).resize(me.resize);
};