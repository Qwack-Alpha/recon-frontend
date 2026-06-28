import "./UploadZone.css";

import { useCallback } from "react";

import { useDropzone } from "react-dropzone";

import { MdCloudUpload } from "react-icons/md";

interface UploadZoneProps {

    file: File | null;

    onFileSelected: (file: File) => void;

}

export default function UploadZone({

    file,

    onFileSelected,

}: UploadZoneProps) {

    const onDrop = useCallback(

        (acceptedFiles: File[]) => {

            if (acceptedFiles.length > 0) {

                onFileSelected(acceptedFiles[0]);

            }

        },

        [onFileSelected],

    );

    const {

        getRootProps,

        getInputProps,

        isDragActive,

    } = useDropzone({

        multiple: false,

        onDrop,

    });

    return (

        <div

            {...getRootProps()}

            className={

                isDragActive

                    ? "uploadZone active"

                    : "uploadZone"

            }

        >

            <input {...getInputProps()} />

            <MdCloudUpload className="uploadIcon" />

            {

                file ? (

                    <>

                        <h3>

                            {file.name}

                        </h3>

                        <p>

                            {

                                (file.size / 1024).toFixed(2)

                            } KB

                        </p>

                    </>

                ) : (

                    <>

                        <h3>

                            Drag & Drop Payment File

                        </h3>

                        <p>

                            or click to browse

                        </p>

                    </>

                )

            }

        </div>

    );

}
