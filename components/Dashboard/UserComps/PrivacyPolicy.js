import React, { useEffect, useRef, useState } from 'react';
import JoditEditor from 'jodit-react';

const PrivacyPolicy = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
    reset,
  } = useForm()
  const [addPrivacyPolicyState, setAddPrivacyPolicyState] = useState(false)
  const cookies = new Cookies()
  const token = cookies.get('token')

  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const onEditorStateChange = (editorState) => setEditorState(editorState)

  useEffect(() => {
    const loadPrivacyPolicy = async () => {
      const res = await axios.get(`${baseURL}/api/v1/public/commoninfo/PrivacyPolicy`)
      //console.log(res)
      if (res?.data?.status === 200) {
        setEditorState(
          EditorState.createWithContent(
            ContentState.createFromBlockArray(convertFromHTML(`${res?.data?.data?.PrivacyPolicy}`)),
          ),
        )
      }
    }
    loadPrivacyPolicy()
  }, [])

  const onSubmit = async (data) => {
    try {
      const content = draftToHtml(convertToRaw(editorState.getCurrentContent()))
      const bodyFormData = new FormData()
      bodyFormData.append('UpdatedText', content)

      setAddPrivacyPolicyState(true)
      const res = await axiosJWT.post(
        `${baseURL}/api/v1/admin/commoninfo/update-privacy-policy`,
        bodyFormData,
        {
          headers: {
            Authorization: `${token}`,
          },
        },
      )
      if (res?.data?.status === 200) {
        setAddPrivacyPolicyState(false)
        //swal('Success!', 'Privacy Policy added')
      } else {
        setAddPrivacyPolicyState(false)

      }
    } catch (error) {
      //console.log(error)
    }
  }

  return (
    <>
      <LoadingOverlay
        active={addPrivacyPolicyState}
        styles={{
          overlay: (base) => ({
            ...base,
            background: '#ebedef9f',
            height: '100%',
          }),
        }}
        spinner={
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color={primary_orange}
            ariaLabel="three-dots-loading"
            wrapperStyle={{ justifyContent: 'center', margin: '5rem 0' }}
            wrapperClassName=""
            visible={true}
          />
        }
      >
        <div className="flex flex-column mt-5">
          <div>
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title ">Privacy Policy</h5>
              </div>
              <div className="card-body">
                <CForm onSubmit={handleSubmit(onSubmit)}>
                  <Editor
                    editorState={editorState}
                    editorClassName="editor_container"
                    placeholder="Privacy Policy"
                    onEditorStateChange={onEditorStateChange}
                    handlePastedText={() => false}
                  />

                  <button className="btn btn-primary text-white my-3 px-4" type="submit">
                    Add
                  </button>
                </CForm>
              </div>
            </div>
          </div>
        </div>
      </LoadingOverlay>
    </>
  )
}

export default PrivacyPolicy