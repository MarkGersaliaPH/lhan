import React, { useEffect, useState } from "react";

import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
function FileUpload({
    multiple = false,
    selected,
    label = 'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
    ...props
}) {
    const [files, setFiles] = useState("");

    const onUpdate = (f) => {
        let file = f[0].file;
        setFiles(file);
    };
 
console.log(files)
    return (
        <div>
            {!files && (
                <div className="p-5 bg-gray-100 border-1">
                    <img src={selected} alt="" className="w-52 mx-auto" />
                </div>
            )}
            <FilePond
                // files={selected != null ? [{ source: previewBlob, options: { type: 'local' } }] : null}

                onupdatefiles={(f) => onUpdate(f)}
                allowMultiple={multiple}
                maxFiles={3}
                // server={null}
                server={{
                    process: {
                        url: "/admin/image/upload",
                        method: "POST", // Your API endpoint for handling file uploads
                        headers: {
                            "X-CSRF-TOKEN": csrfToken, // Add CSRF token if required
                        },
                    },
                }}
                // name="file" /* sets the file input name, it's filepond by default */
                labelIdle={label}
            />
        </div>
    );
}

export default FileUpload;
