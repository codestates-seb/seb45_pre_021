import MDEditor from '@uiw/react-md-editor';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';

const Editor = ({ content, setContent }) => {
  const handleChange = (newContent) => {
    setContent(newContent);
  };
  return (
    <EditorContainer data-color-mode="light">
      <MDEditor
        height={240}
        value={content}
        onChange={handleChange}
        preview="edit"
      />
    </EditorContainer>
  );
};

Editor.propTypes = {
  content: PropTypes.string.isRequired,
  setContent: PropTypes.func.isRequired,
};

const EditorContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 240px;
  line-height: 18px;
  .w-md-editor {
    --md-editor-font-family: inherit !important;
  }
`;

export default Editor;
