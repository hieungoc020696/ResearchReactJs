import React from 'react';
import { Row, Col } from 'antd';
import Carousels from '@shared/components-admin/uielements/carousel';
import PageHeader from '@shared/components-admin/utility/pageHeader';
import Box from '@shared/components-admin/utility/box';
import LayoutWrapper from '@shared/components-admin/utility/layoutWrapper';
import ContentHolder from '@shared/components-admin/utility/contentHolder';
import IntlMessages from '@shared/components-admin/utility/intlMessages';
import basicStyle from '@shared/assets-admin/styles/constants';
import CarouselWrapper from './Carousel.styles';

const Carousel = props => (
  <CarouselWrapper>
    <Carousels {...props} />
  </CarouselWrapper>
);
export default function() {
  const onChange = (a, b, c) => {};
  const { rowStyle, colStyle, gutter } = basicStyle;
  return (
    <LayoutWrapper>
      <PageHeader>
        {<IntlMessages id="uiElements.carousel.carousel" />}
      </PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.carousel.basicCarousel" />}
            subtitle={
              <IntlMessages id="uiElements.carousel.basicCarouselSubTitle" />
            }
          >
            <ContentHolder>
              <Carousel afterChange={onChange}>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
              </Carousel>
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.carousel.verticalCarousel" />}
            subtitle={
              <IntlMessages id="uiElements.carousel.verticalCarouselSubTitle" />
            }
          >
            <ContentHolder>
              <Carousel afterChange={onChange} vertical>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
              </Carousel>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.carousel.fadeInTransition" />}
            subtitle={
              <IntlMessages id="uiElements.carousel.fadeInTransitionSubTitle" />
            }
          >
            <ContentHolder>
              <Carousel effect="fade">
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
              </Carousel>
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={
              <IntlMessages id="uiElements.carousel.scrollAutomatically" />
            }
            subtitle={
              <IntlMessages id="uiElements.carousel.scrollAutomaticallySubTitle" />
            }
          >
            <ContentHolder>
              <Carousel autoplay rtl>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
              </Carousel>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
