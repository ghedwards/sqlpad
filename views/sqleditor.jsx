'use strict';

var React = require('react');
var CodeMirror;

module.exports = React.createClass({

    propTypes: {
      id: React.PropTypes.string,
      defaultValue: React.PropTypes.string,
      value: React.PropTypes.string,
      onChange: React.PropTypes.func
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