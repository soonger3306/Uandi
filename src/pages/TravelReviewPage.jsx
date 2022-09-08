import React,{useEffect,useState} from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { getReview,postReview ,deleteReview,updateReview} from "../redux/module/TravelReviewSlice";
import useInput from "../../src/components/hooks/useInput";
import axios from "axios";
const TravelReviewPage = () => {

    const dispatch = useDispatch();
    const { id } = useParams();


    const { review } = useSelector((state) => state.review);
    console.log( 'dmd',review);

    const [content, onChangeContentHandler] = useInput();
   //추가버튼
    const submitHandler = (e) => {
        e.preventDefault();
       const _postReview  = {
        id:nanoid(),
        postId:id,
        content,
       
    };
    dispatch(postReview(_postReview ))};


  
//수정인풋
  const [updateContent, setUpdateContent] = useState({
        content: "",
 Id: 0,
    });
 const makeInput = async (review, id) => {
        await axios
            .put(`http://localhost:3001/review/${id}`, {
                ...review,
                input: 1,
            })
            .then(dispatch(getReview()));         //이건 없으면 구현이 안됨    
    };
  //수정업데이트  
    const onClickUpdate = async (id, updated) => {
        await axios
            .put(`http://localhost:3001/review/${id}`, updated)
         .then(dispatch(getReview()))               //추가시 반응이 느리고 가끔 안먹힐때 있음 
            .catch((error) => console.log(error));
    };
    
    const onClickDelete = async (id) => {
        await axios
            .delete(`http://localhost:3001/review/${id}`)
            .then(dispatch(getReview()))              //추가시 반응이 느리고 가끔 안먹힐때 있음 
            .catch((error) => console.log(error));
    };

  useEffect(() => {
    dispatch(getReview());
  }, []);


    return (
        
        <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 30 }}
        >
            <Background>
                <Header />
                <Div>
              
                    <Textarea>
                        <textarea
                            className="textarea is-info"
                            placeholder="후기를 남겨 주세요!"
                            style={{ backgroundColor: "#e2f0ff" }}
                            onChange={onChangeContentHandler}
                        ></textarea>
                         <br/>
                         <button class="button is-info is-inverted"
                              onClick={submitHandler}
                             style={{ backgroundColor: "#ffffff12" }}
                             >
                            작성!
                            </button>
                            <div>
  {review.map((review) => {
                    if (id === review.postId) {
                       return (

  <Card class="card">
    
  
  <div class="card-content">


          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"
            style={{height:"50px"}}/>
      
      <p>John Smith</p>
      {review.content}
    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      <br/>

    <button class="button is-info is-inverted"
         onClick={()=>onClickDelete(review.id) }         
      style={{ backgroundColor: "#ffffff12" }}
        >
        삭제
         </button> 

          <button
       style={{ backgroundColor: "#ffffff12" }}
         class="button is-info is-inverted"
            onClick={() =>
                makeInput(
                   review,
                    review.id
                )
            }
            className="button is-ghost"
        >
            수정
        </button> 
         {review.input === 1 ? (
                <div key={review.id}>
                    <input
                        onChange={(e) =>
                            setUpdateContent({
                                ...review,
                                content:
                                    e.target
                                        .value,
                                input: 0,
                            })
                        }
                    ></input>

                    <button
                        onClick={() =>
                            onClickUpdate(
                                review.id,
                                updateContent

                            ) }
                    >
                        수정완료
                    </button>
                </div>
            ) : null}
</div>
   </Card>
      );
    }else {
        return null;
    }
    })
   }


   </div>


           </Textarea>   
                </Div>
            </Background>
        </motion.div>
        
    );
    
};

const Card = styled.div`
height: 200px;

`;
const Content= styled.div`
height: 50px;

`;
const Background = styled.div`
    overflow: auto;
    height: 100vh;
    background-size: cover;
    background-image: url(https://velog.velcdn.com/images/soonger3306/post/41dbb138-607a-4793-8a17-f064330754c6/image.gif); ;
`;

const Div = styled.div`
    overflow: auto;
    height: 82vh;
    margin: 10px 170px;

    background-image: url(https://t1.daumcdn.net/cfile/blog/1245F5274B1882015E);

    background-color: #ffffffd0;
    border-radius: 10px;
`;
const Textarea = styled.div`
    /* overflow: auto;
  height: 82vh; */
    margin: 20px 50px;
`;

export default TravelReviewPage;
