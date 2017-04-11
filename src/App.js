import 'draft-js/dist/Draft.css';
import './App.css';

import React from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  componentDidMount() {
    this.focus();
  }

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  }

  focus = () => {
    this.editor.focus();
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className="editor" onClick={this.focus}>
        <Editor
          editorState={editorState}
          onChange={this.onChange}
          ref={(element) => { this.editor = element; }}
          placeholder="Tell your story"
          spellCheck
        />
      </div>
    );
  }
}

export default MyEditor;
