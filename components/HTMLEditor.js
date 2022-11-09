import React, { useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { githubLight } from '@uiw/codemirror-theme-github';

let defaultCode = `<!DOCTYPE html>
<html>
  <head>
	<title>Page Title</title>
  </head>
  <body>
    <h1>This is a Heading</h1>
	<p>This is a paragraph.</p>
  </body>
</html>`;

function HTMLEditor(props) {
    const location = useLocation();
    defaultCode = location?.state?.code || defaultCode;
    let { code = defaultCode } = props;
    let [dummyCode, setDummyCode] = useState(code);
    let [runCode, setRunCode] = useState('');
    const onChange = React.useCallback((value) => {
        setDummyCode(value);
    }, []);

    useEffect(() => {
        setRunCode(code);
    }, [code])

    const onRun = () => {
        setRunCode(dummyCode);
    }

    return (
        <div className='block bg-gray-200 p-3 h-[120vh] lg:h-[90vh]'>
            <div>
                <button type="button" className="bg-[#212D94] text-white rounded-md py-2 hover:bg-red-700 hover:text-white px-3" onClick={() => { onRun() }}>
                    <div className="flex flex-row align-middle">
                        <span className="mr-2">Run</span>
                        <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </button>
            </div>
            <div className='block lg:flex mt-2'>
                <div className='w-full lg:w-1/2 border-red-900 mr-3'>
                    <CodeMirror
                        value={code}
                        height={window.screen.width <= 480 ? '30vh' : '77vh'}
                        extensions={[html({ matchClosingTags: true, autoCloseTags: true })]}
                        onChange={onChange}
                        theme={githubLight}
                    />
                </div>
                <div className='w-full lg:w-1/2 bg-white mt-2 lg:mt-0'>
                    <iframe title="Code Editor Iframe" srcDoc={runCode} className="h-[80vh] lg:h-[100%]"></iframe>
                </div>
            </div>
        </div>
    );
}
export default HTMLEditor;