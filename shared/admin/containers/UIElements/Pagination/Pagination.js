import React from 'react';
import { Row, Col } from 'antd';
import Pagination from '@shared/components-admin/uielements/pagination';
import PageHeader from '@shared/components-admin/utility/pageHeader';
import Box from '@shared/components-admin/utility/box';
import LayoutWrapper from '@shared/components-admin/utility/layoutWrapper';
import ContentHolder from '@shared/components-admin/utility/contentHolder';
import IntlMessages from '@shared/components-admin/utility/intlMessages';
import basicStyle from '@shared/assets-admin/styles/constants';

export default function() {
  const [current, setCurrent] = React.useState(3);

  const onShowSizeChange = (current, pageSize) => {};
  const onChange = pageNumber => {};
  const showTotal = total => {
    return `Total ${total} items`;
  };
  const onChangeControlled = page => {
    setCurrent(page);
  };
  const { rowStyle, colStyle, gutter } = basicStyle;
  return (
    <LayoutWrapper>
      <PageHeader>
        {<IntlMessages id="uiElements.pagination.pagination" />}
      </PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title={<IntlMessages id="uiElements.pagination.basic" />}>
            <ContentHolder>
              <Pagination defaultCurrent={1} total={50} />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title={<IntlMessages id="uiElements.pagination.more" />}>
            <ContentHolder>
              <Pagination defaultCurrent={6} total={500} />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title={<IntlMessages id="uiElements.pagination.changer" />}>
            <ContentHolder>
              <Pagination
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                defaultCurrent={3}
                total={500}
              />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title={<IntlMessages id="uiElements.pagination.jumper" />}>
            <ContentHolder>
              <Pagination
                showQuickJumper
                defaultCurrent={2}
                total={500}
                onChange={onChange}
              />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title={<IntlMessages id="uiElements.pagination.miniSize" />}>
            <ContentHolder>
              <Pagination size="small" total={50} />
              <br />
              <Pagination
                size="small"
                total={50}
                showSizeChanger
                showQuickJumper
              />
              <br />
              <Pagination size="small" total={50} showTotal={showTotal} />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title={<IntlMessages id="uiElements.pagination.simpleMode" />}>
            <ContentHolder>
              <Pagination simple defaultCurrent={2} total={50} />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title={<IntlMessages id="uiElements.pagination.controlled" />}>
            <ContentHolder>
              <Pagination
                current={current}
                onChange={onChangeControlled}
                total={50}
              />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title={<IntlMessages id="uiElements.pagination.totalNumber" />}>
            <ContentHolder>
              <Pagination
                total={85}
                showTotal={total => `Total ${total} items`}
                pageSize={20}
                defaultCurrent={1}
              />
              <br />
              <Pagination
                total={85}
                showTotal={(total, range) =>
                  `${range[0]}-${range[1]} of ${total} items`
                }
                pageSize={20}
                defaultCurrent={1}
              />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
