import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { intl } from '@shared/lib/core/Localization/IntlGlobalProvider';
import { Row, Col, Form, Input, InputNumber, Button, Checkbox, Radio, Select, Spin, Space, Tabs } from 'antd';
import LocalizedEditor, { LocalizedItemWrapper } from '@shared/ui/Localization/LocalizedEditor';
import actions from '../../../redux/list/shipper/actions';

import formHelper from '@shared/lib/helpers/formHelper';
import selectHelper from '@shared/lib/helpers/ui/selectHelper';

const { TextArea } = Input;
const { Option } = Select;
const { TabPane } = Tabs;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 18, span: 6 },
};

const tabSubmit = 'general';

export class Edit extends React.Component {
  frmRef = this.props.frmRef;

  constructor(props) {
    super(props);
    this.handleTabsChanged = this.handleTabsChanged.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return formHelper.def.shouldComponentUpdate(this.props, nextProps, nextState);
  }
  componentDidMount() {
    this.props.editVisibleSubmit(true);
  }

  handleTabsChanged = (activeKey) => {
    this.props.editVisibleSubmit(activeKey === tabSubmit);
  };

  render() {
    const m = this.props.model;
    if (!m) return null;

    const { loading } = this.props;

    return (
      <Spin spinning={loading} size='large'>
        <Tabs defaultActiveKey={tabSubmit} type='card' onChange={this.handleTabsChanged}>
          <TabPane tab={<FormattedMessage id='common.general' />} key='general'>
            <Form
              id='frmEdit'
              ref={this.frmRef}
              colon={false}
              preserve={false}
              scrollToFirstError={true}
              layout='horizontal'
              {...layout}
              initialValues={{
                Id: m.Id,
                Code: m.Code,
                Name: m.Name,
                PaymentTermId: m.PaymentTermId,
                VatNumber: m.VatNumber,
                LocalName: m.LocalName,
                StorageFreeDays: m.StorageFreeDays,
                Website: m.Website,
                Active: m.Active,
                Locales: m.Locales,
              }}
            >
              <Form.Item name='Id' noStyle>
                <Input type='hidden' />
              </Form.Item>

              <Form.Item name='Code' label={<FormattedMessage id='admin.shippers.fields.code' />}>
                <Input disabled />
              </Form.Item>
              <LocalizedEditor
                id='localized_Shipper'
                locales={m.Locales}
                standardRender={
                  <div>
                    <Form.Item
                      name='Name'
                      label={<FormattedMessage id='admin.shippers.fields.name' />}
                      rules={[
                        {
                          required: true,
                          message: (
                            <FormattedMessage
                              id='common.validators.inputFields.required'
                              values={{ field: <FormattedMessage id='admin.shippers.fields.name' /> }}
                            />
                          ),
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </div>
                }
                localizedRender={
                  <div>
                    <Form.List name='Locales'>
                      {(fields) => (
                        <>
                          {fields.map((field, index) => (
                            <LocalizedItemWrapper key={field.key} index={index}>
                              <Form.Item
                                {...field}
                                key={'LanguageId_' + index}
                                name={[field.name, 'LanguageId']}
                                fieldKey={[field.fieldKey, 'LanguageId']}
                                noStyle
                              >
                                <Input type='hidden' />
                              </Form.Item>
                              <Form.Item
                                {...field}
                                key={'Name_' + index}
                                name={[field.name, 'Name']}
                                fieldKey={[field.fieldKey, 'Name']}
                                label={m.LocaleLabels['Name']}
                              >
                                <Input />
                              </Form.Item>
                            </LocalizedItemWrapper>
                          ))}
                        </>
                      )}
                    </Form.List>
                  </div>
                }
              />

              <Form.Item name='LocalName' label={<FormattedMessage id='common.fields.localName' />}>
                <Input />
              </Form.Item>
              <Form.Item name='VatNumber' label={<FormattedMessage id='common.fields.vatNumber' />}>
                <Input />
              </Form.Item>
              <Form.Item name='PaymentTermId' label={<FormattedMessage id='common.paymentTerm' />}>
                <Select
                  placeholder={<FormattedMessage id='common.selectObject' values={{ field: <FormattedMessage id='common.paymentTerm' /> }} />}
                  allowClear
                  showSearch
                  filterOption={selectHelper.def.filterOption}
                >
                  {m.SelectPaymentTerms.map((x) => (
                    <Option key={x.Id} value={x.Id}>
                      {`[${x.Code}] ${x.Name}`}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name='StorageFreeDays' label={<FormattedMessage id='common.fields.storageFreeDays' />}>
                <InputNumber />
              </Form.Item>
              <Form.Item name='Website' label={<FormattedMessage id='common.fields.website' />}>
                <Input />
              </Form.Item>
              <Form.Item name='Active' label={<FormattedMessage id='common.fields.active' />} valuePropName='checked'>
                <Checkbox />
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab={<FormattedMessage id='common.billing' />} key='billing'>
            <FormattedMessage id='common.notify.saveBeforeEdit' />
          </TabPane>
          <TabPane tab={<FormattedMessage id='common.address' />} key='address'>
            <FormattedMessage id='common.notify.saveBeforeEdit' />
          </TabPane>
        </Tabs>
      </Spin>
    );
  }
}

Edit.propTypes = {
  frmRef: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    model: state.Shipper.edit.modelGet,
    loading: state.Shipper.edit.loading,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    editVisibleSubmit: (visible) => dispatch(actions.editVisibleSubmit(visible)),
    editResetVisibleSubmit: () => dispatch(actions.editResetVisibleSubmit()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
