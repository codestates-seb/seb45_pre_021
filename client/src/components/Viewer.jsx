import MDViewer from '@uiw/react-md-editor';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const Viewer = ({ content }) => {
  return (
    <ViewerContainer data-color-mode="light">
      <MDViewer.Markdown source={content} />
    </ViewerContainer>
  );
};

Viewer.propTypes = {
  content: PropTypes.string.isRequired,
};

const ViewerContainer = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 240px;
  padding: 0.5rem;
`;

export default Viewer;
