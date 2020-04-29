import React, { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import { Link } from 'react-router-dom';
import Layout from '../layout/index';
import { httpPostFormData, httpDelete, httpPost } from '../../actions/data.action';
import validateImage from '../../helpers/validateImage';
import { hideLoader, showLoader } from '../../helpers/loader';

class Upload extends Component {
  constructor(props){
    super(props)
    this.state = {
      fileName: '',
      postBody: {},
      documents: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  upload = async e => {
    const { fileName, postBody } = this.state;
    console.log(fileName)
    const imageData = e.target.files[0];
    const validFormat = validateImage(imageData);
    if (validFormat.valid) {
      //NotificationManager.success(validFormat.message,'Yippe!',3000);
      // postBody[fileName] = [...postBody[fileName], e.target.files[0]];
      postBody[fileName] = e.target.files[0];
      this.setState({ postBody });
      await this.saveDoc()
    } else {
      //NotificationManager.error(validFormat.message,'Yippe!',3000);
      e.target.value = '';
    }
  };

  saveDoc = async () => {
    try{
      const { id } = this.props.match.params;
      const { fileName, postBody } = this.state;
      showLoader();

      let formData = new FormData();
      if(fileName === 'nationalId') formData.append('nationalId', postBody.nationalId);
      if(fileName === 'votersCard') formData.append('votersCard', postBody.votersCard);
      if(fileName === 'internationalPassport') formData.append('internationalPassport', postBody.internationalPassport);
      if(fileName === 'driversLicense') formData.append('driversLicense', postBody.driversLicense);
      if(fileName === 'ecowasPassport') formData.append('ecowasPassport', postBody.ecowasPassport);
      if(fileName === 'registeredId') formData.append('registeredId', postBody.registeredId);
      if(fileName === 'businessCertificate') formData.append('businessCertificate', postBody.businessCertificate);

      const res = await httpPostFormData(`auth/onboarding_five/${id}`, formData);
      if(res.code === 201){
        hideLoader();
        this.setState({ 
          documents: [...this.state.documents, res.data.upload ],
          fileName: ''
      });
      this.refs.path.value = '';
      }
    }catch(error){
      hideLoader();
      console.log(error)
    }
  }

  deleteDoc = async (id) => {
    try{

      const res = await httpDelete(`auth/document/${id}`);

      if(res.code === 200){
        this.setState({ documents: [...this.state.documents.filter(item => item.id !== id )]});
      }
    }catch(error){
      console.log(error)
    }

  }

  handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(this.state.postBody);
    try{
      const { id } = this.props.match.params;

      if(!this.state.documents.length){
        return NotificationManager.warning('A minimum of one document is required');
      }

      showLoader();
      const res = await httpPost(`auth/complete_onboarding_five/${id}`);
      if(res.code === 201){
        hideLoader();
        // setState({ userId: res.data.id });
        NotificationManager.success('Completed Successfully', 'Onboarding Status')
        return this.props.history.push('/staff_list');
      }
      console.log(res)
    } catch (error){
      hideLoader();
      console.log(error)
    }
  }

  handleSave = async (e) => {
    e.preventDefault();
    showLoader();
    try{
      const { id } = this.props.match.params;

      if(!this.state.documents.length){
        return NotificationManager.warning('A minimum of one document is required');
      }

      const res = await httpPostFormData(`auth/complete_onboarding_five/${id}`);
      if(res.code === 201){
        hideLoader();
      }
      console.log(res)
    } catch (error){
      hideLoader();
      console.log(error)
    }
  }

  handleBackButton = () => {
    return this.props.history.push({
      pathname: `${this.props.location.backurl}`,
      savedState: this.props.location.savedState
    })
  }


  render() {
    return (
      <div>
          <div>
            <div className="col-12">
                <div className="card-body">

                  <form className="form-horizontal" >
                    <div className="form-group row">
                      <label for="inputName" className="col-md-2 col-form-label">Document Type</label>
                      <div className="col-md-3">
                        <select 
                          className="form-control w-100"
                          name='fileName'
                          value={this.state.fileName} 
                          onChange={this.handleChange}
                        >
                          <option value="">Select File</option>
                          <option value="nationalId">National ID</option>
                          <option value="votersCard">Voters Card</option>
                          <option value="driversLicense">Driver's Licence</option>
                          <option value="internationalPassport">International Passport</option>
                          <option value="ecowasPassport">ECOWAS Passport</option>
                          <option value="registeredId">Registered/Valid Work ID</option>
                          <option value="businessCertificate">Business Certificate</option>
                        </select>
                      </div>
                      <label for="inputName" className="col-md-3 col-form-label">Upload Document</label>
                      <div className="col-md-4">
                        <input type="file" 
                          className="form-control" 
                          name="path"
                          ref='path'
                          onChange={this.upload}
                        />
                      </div>
                    </div>
                  </form>

                  <br/>

                  <div className="col col-md-12 pr-0 pl-0">
                    <div class="table-responsive">
                      <table class="table table-bordered table-hover mb-0 text-nowrap">
                        <thead>
                        <tr>
                          {/* <th className="wd-15p">S/N</th> */}
                          <th class="wd-15p">File Name</th>
                          <th class="wd-15p"></th>
                          <th class="wd-25p"></th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                              this.state.documents.length ?
                                this.state.documents.map(data => (
                                  <tr>
                                    <td>{data.fileName}</td>
                                    <td>{<a href={`${data.path}`} target="_blank">View document</a>}</td>
                                    <td><a className="ml-3 text-danger" onClick={() => this.deleteDoc(data.id)} style={{ cursor: 'pointer' }}>Delete</a></td>
                                  </tr>
                                )) : ''
                            }
                        </tbody>
                      </table>
                    </div>
                  </div>
                    

                </div>
              </div>
            </div>
          </div>
      
    )
  }
}

export default Upload;
