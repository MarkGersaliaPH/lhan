import React from "react";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import InputError from "./InputError";
import SelectInput from "./SelectInput";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import FileUpload from "./FileUpload";

function DynamicForm({ inputs, setData, data, errors, handleChange }) {
  
    const handleEditorChange = (name, event, editor) => {
        const content = editor.getData();
        setData(name, content);

        // Now you can save the 'content' variable to your state or perform other actions.
    };

    return (
        <div>
            {inputs &&
            
                inputs.map((input, key) => {
                    switch (input.type) {
                        case "select":
                            return (
                                <div className="my-5">
                                    <InputLabel
                                        className="capitalize"
                                        htmlFor={input.name}
                                        value={input.name}
                                    />
                                    <SelectInput
                                        value={data[input.name]}
                                        name={input.name}
                                        options={input.options}
                                        onChange={(e)=>handleChange(e)}
                                    />
                                </div>
                            );
                            break;
                            case "file":
                                return (
                                    <div className="my-5">
                                        {/* <InputLabel
                                            className="capitalize"
                                            htmlFor={input.name}
                                            value={input.name}
                                        />
                                        <input type="file" 
                                            onChange={(e) => {
                                                setData(input.name,e.target.files[0])
                                            }}
                                            name={input.name} />
                                        <div>
                                            <img src={data.image_url} alt="" className="h-1/2 " />
                                        </div> */}
                                        
                                    </div>
                                );
                                break;
                        case "editor":
                            return (
                                <div className="my-5">
                                     <InputLabel
                                        className="capitalize"
                                        htmlFor={input.name}
                                        value={input.name}
                                    />
                                    <CKEditor
                                        editor={ClassicEditor}
                                        height="1000px"
                                        name="content"
                                        data={data[input.name]} 
                                        onChange={(event, editor) => {
                                            handleEditorChange(
                                                input.name,
                                                event,
                                                editor
                                            );
                                        }} 
                                    />
                                    
                                    <InputError
                                        message={errors[input.name]}
                                        className="mt-2"
                                    />
                                </div>
                            );

                        default:
                            return (
                                <div className="my-5">
                                    <InputLabel
                                        className="capitalize"
                                        htmlFor="email"
                                        value={input.name}
                                    />
                                    <TextInput
                                        id={input.name}
                                        type={input.type}
                                        name={input.name}
                                        value={data[input.name]}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) => handleChange(e)}
                                    />
                                    
                                    <InputError
                                        message={errors[input.name]}
                                        className="mt-2"
                                    />
                                </div>
                            );
                            break;
                    }

                    
                })}
        </div>
    );
}

export default DynamicForm;
