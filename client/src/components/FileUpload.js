import React, { Fragment, useState } from 'react'

const FileUpload = () => {


    return (
        <Fragment>
            <form>
                <div className="mb-3">
                    <label htnlFor="formFile" className="form-label">Choose File</label>
                    <input className="form-control" type="file" id="formFile" />
                </div>

                <div class="d-grid">
                    <button class="btn btn-primary" type="button">Upload</button>
                    
                </div>
            </form>

        </Fragment>
    )
}

export default FileUpload