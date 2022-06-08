import React, {PureComponent} from 'react';


class Vzu extends PureComponent {

    constructor(props) {
      super(props);
      this.onChange = this.onChange.bind(this);
      this.state = {check: false}
          }

    onChange(e) {
        let check = this.state['check']
        let value = 0
        if (!check) {
            value = 500
        }
        this.setState({check: !check})
        this.props.onChangeCena({target:{value:value, id:5}});
    }

    render() {
        return (
                        <div className="form-check">
                            <input className="form-check-input"
                                   type="checkbox"
                                   value="500"
                                   id="flexCheckDefault"
                                   onChange={this.onChange}/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Ставить ВЗУ в люк ?
                                </label>
                        </div>
        );
    }
}

Vzu.propTypes = {};

export default Vzu;