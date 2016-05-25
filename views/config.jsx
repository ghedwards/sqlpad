'use strict';

var React = require('react');
var moment = require('moment');

module.exports = React.createClass({
  displayName: 'Configs',

  render: function render() { 

    return <div className="col-sm-12  col-md-12 main">
    <form id="connection-form" role="form" className="col-md-6 col-md-offset-3" action={'/configs/'+((this.props.config && this.props.config._id) ? this.props.config._id : "new")}
          method="post">
        <fieldset>

            <legend>Config Item</legend>

            <div className="form-group">
                <label className="control-label" for="key">Key</label>

                <input id="key" name="key" defaultValue={this.props.config ? this.props.config.key : ""} type="text" placeholder=""
                       className="form-control input-md" />
            </div>

            <div className="form-group">
                <label className="control-label" for="value">Value</label>

                <input id="value" name="value" defaultValue={this.props.config ? this.props.config.value : ""} type="text" placeholder=""
                       className="form-control input-md" />
            </div>

            {(this.props.config && this.props.config._id)?<input type="hidden" name="_method" value="put"/>:""}

            <div className="form-group">
                <label className="control-label" for="btnTest"></label>

                <div className="">
                    <button id="btn-Save-config" name="btnSave" className="btn btn-primary" type="submit">Save</button>
                </div>
            </div>

        </fieldset>
    </form>
</div>
}});
