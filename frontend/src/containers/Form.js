import React from "react";
import 'antd/dist/antd.css';
import {
  Form,
  Select,
  InputNumber,
  Input,
  Radio,
  Button,
  DatePicker,
  Spin
} from "antd";
import axios from "axios";
import Results from "./Results";

const Search = Input.Search;
const { Option } = Select;
const { RangePicker } = DatePicker;

class FilterForm extends React.Component {
  state = {
    results: [],
    loading: false,
    error: null
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const age_count_max =
        values["maximum-age"] === undefined ? null : values["maximum-age"];
      const age_count_min =
        values["minimum-age"] === undefined ? null : values["minimum-age"];
      const gender =
        values["searchGender"] === undefined ? null : values["searchGender"];
      const special =
        values["searchSpecializations"] === undefined ? null : values["searchSpecializations"];

      this.setState({ loading: true });

      if (!err) {
        axios
          .get("http://localhost:8000/api-therapists/", {
            params: {
              gender,
              special,
              age_count_min,
              age_count_max,
            }
          })
          .then(res => {
            this.setState({
              loading: false,
              results: res.data
            });
          })
          .catch(err => {
            this.setState({ error: "There was an error" });
            console.log(err);
          });
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { error, loading, results } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      wrapperCol: { span: 12, offset: 6 }
    };
    return (
      <div>
        {error && <span>There was an error</span>}
        <h1>dfg</h1>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item>
            <h1 className="ant-form-text">Filter Journals</h1>
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("searchGender")(
              <Search
                placeholder="Gender specifications..."
                onSearch={value => console.log(value)}
                enterButton
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("searchSpecializations")(
              <Search
                placeholder="Specializations specifications..."
                onSearch={value => console.log(value)}
                enterButton
              />
            )}
          </Form.Item>



          <Form.Item>
            {getFieldDecorator("minimum-age")(
              <InputNumber min={0} placeholder="0" />
            )}
            <span className="ant-form-text"> minimum age</span>
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("maximum-age")(
              <InputNumber min={0} placeholder="0" />
            )}
            <span className="ant-form-text"> maximum age</span>
          </Form.Item>


        </Form>

        {loading ? (
          <div className="loader-div">
            <Spin />
          </div>
        ) : (
          <Results journals={results} />
        )}
      </div>
    );
  }
}

const WrappedFilterForm = Form.create({ name: "validate_other" })(FilterForm);

export default WrappedFilterForm;