'use strict';

var React = require('react');
var CodeMirror;

module.exports = React.createClass({

    propTypes: {
      id: React.PropTypes.string,
      defaultValue: React.PropTypes.string,
      value: React.PropTypes.string,
      onChange: React.PropTypes.func,
      schematree: React.PropTypes.object
    },

    getInitialState () {
      return {
        isFocused: false,
      };
    },

    componentDidMount : function() {
        CodeMirror = require('codemirror');
        var editor = this.refs.editor;
        if (!editor.getAttribute) editor = editor.getDOMNode();
          this.editor = CodeMirror.fromTextArea(editor, {mode: "text/x-sql",
          indentWithTabs: true,
          smartIndent: true,
          lineNumbers: true,
          matchBrackets : true,
          autofocus: true,
          extraKeys: {"Ctrl-Space": "autocomplete"}});

          this.editor.on('change', this.codemirrorValueChanged);
          this.editor.setValue(this.props.defaultValue || this.props.value || '');

    },

    codemirrorValueChanged (doc, change) {
      if (this.props.onChange && change.origin != 'setValue') {
        this.props.onChange(doc.getValue());
      }
    },

    componentDidUpdate: function() {

      if (this.editor) {
        if (this.props.value != null) {
          if (this.editor.getValue() !== this.props.value) {
            this.editor.setValue(this.props.value);
          }
        }
        //console.log(this.props.schematree);
        if ( this.props.schematree ) {
          var hintoptions = {"tables":{}}, tree = this.props.schematree;
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
          //console.log(hintoptions);
          this.editor.setOption("hintOptions",hintoptions);
        }
      }


    },

    render : function() {

        var editor = React.createElement('textarea', {
          id: this.props.id,
          ref: 'editor',
          value: this.props.defaultValue
        });

        return React.createElement('div', {"className":"panel-editor"}, editor);

    }

});
/*
module.exports = React.createClass({

  // getInitialState: function() {
  //   return { isControlled: this.props.value != null };
  // },

  propTypes: {
    value: React.PropTypes.string,
    defaultValue: React.PropTypes.string
  },

  componentDidMount: function() {
    var isTextArea = this.props.forceTextArea || IS_MOBILE;
    if (!isTextArea) {
      var editor = this.refs.editor;
      if (!editor.getAttribute) editor = editor.getDOMNode();
      this.editor = CodeMirror.fromTextArea(editor, this.props);
      this.editor.on('change', this.handleChange);
    }
  },

  componentDidUpdate: function() {
    if (this.editor) {
      if (this.props.value != null) {
        if (this.editor.getValue() !== this.props.value) {
          this.editor.setValue(this.props.value);
        }
      }
    }
  },
  render: function() {

    var editor = React.createElement('textarea', {
      ref: 'editor',
      value: this.props.value
    });

    return React.createElement('div', {style: this.props.style, className: this.props.className}, editor);
  }
});

module.exports = CodeMirrorEditor;*/