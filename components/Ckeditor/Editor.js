import React from 'react';
import { CKEditor } from 'ckeditor4-react';

function Editor() {
    return (
        <>
            <CKEditor
                config={{
                    uiColor: "#349520",
                    extraPlugins: "uploadimage",
                    filebrowserUploadMethod: "form",
                    filebrowserUploadUrl: ("/uploader/upload"),
                }}
            />
        </>
    );
}

export default Editor;