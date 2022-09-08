import React from 'react';
import styled from "styled-components"
import { Link } from "react-router-dom";
const EditForm = () => {


    return (
        
        <>
        <div>
  
   <Card className="card">
          <Card01 className="card-body">
      
             
              <br/>
              <br/>
          
        <div  className="file has-name is-fullwidth">
          <label className="file-label">
            <input className="file-input" type="file" name="resume"/>
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload"></i>
              </span>
              <span className="file-label">
                Choose a file…
              </span>
              </span>
              <span className="file-name">
                Screen Shot 2017-07-29 at 15.54.25.png
              </span>
            </label>
          </div >
          <br/>
            
            <Card02  className="field">
            
              <div className="control">
   <div className="field is-horizontal">
  
    <div className="field-body">
      <div className="field">
          <label className="label">작성자</label>
        <Input className="input" type="text" placeholder="✎"/>
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
   
      </div>
      <div className="field">
        <p className="control is-expanded has-icons-left has-icons-right">
        <label className="label">도시</label>
            <Select name="fruits" className="select">
                    <Option disabled selected>ᴄɪᴛʏ</Option >
                    <Option  value="apple">apple</Option >
                    <Option  value="orange">orange</Option >
                    <Option  value="grape">grape</Option >
                    <Option  value="melon">melon</Option >
  
                  </Select>
  
  
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
    </div>
  </div>
                
              
          
              </div>
            </Card02 >
            
            <Card02 className="field">
              <label className="label">여행날짜</label>
              <div className="control">
                <Input className="input" type="email" placeholder="✎"/>
              </div>
  
              
            </Card02 >
  
            <Card02  className="field">
              <label className="label">MBTI</label>
              <div className="control">
                <Input className="input" type="email" placeholder="✎"/>
              </div>
            
              
            </Card02 >
    
  
            <Card02 className="field">
              <label className="label">Email</label>
              < Textarea className="textarea" placeholder="✎"></ Textarea>
  
            </Card02 >
            
  
            <Buttonu  className="field">
              <br/>
              <br/>
              <br/>
              <Link  to={`/detail`}>
            <Button className="button"><h >수정완료</h>&nbsp;&nbsp;&nbsp;   
          <h1>
            <span>.</span>&nbsp;
            <span>.</span>&nbsp;
             <span>.</span>
           <span>🚅</span>
          </h1>
          </Button>
          </Link>

         </Buttonu>
  
         </Card01>
        </Card>
       </div>   
        </>
      );
     };
  
  
  const Input = styled.input`
   
    background-color: #e8feff96;
  `;
  const Textarea = styled.textarea `
   
    background-color: #e8feff96;
    
  `;
  
  
  
  const Button = styled.button `
     
    background-color: #0165fc68;
  `;

  const Card = styled.div`
  background-size: cover;
    position: absolute;
    background-image:url(https://velog.velcdn.com/images/soonger3306/post/41dbb138-607a-4793-8a17-f064330754c6/image.gif);
    overflow: hidden;
    margin: 28px 150px ; 
    position:
    relative;
  content: center;
  `;
  
  
  
  const Card01 = styled.div`
  
  margin: 20px;
  `;
  const Card02 = styled.div`
  height: 95px;
   margin: 20px
  `;
  const Buttonu= styled.div`
  height: 100px;
  margin: 30px
  `;
  
  /* IE */
  
  
  const Select= styled.select`
  width: 150px;
    height: 40px;
    background: #e8feff96;
    padding: 5px 30px 5px 10px;
    border-radius: 4px;
    outline: 0 none;
    border-color: #8d8b8b61;
  `;
  const Option= styled.option`
  width: 150px;
  background: #e8feff1e;
   
    padding: 3px 0;
  `;
  
  
export default EditForm;