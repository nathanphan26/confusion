import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

  function RenderDish ({dish}) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  function RenderComments ({comments}) {
    return(
      comments.map((comment) => {
        return(
            <div key={comment.id}>
              {comment.comment}
              <br />
              <br />
              -- {comment.author} , {comment.date}
            </div>
        );
      })
    );
  }

  const DishDetail = (props) => {
    if(props.dish == null) return (<div></div>);
  
    return(
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish}></RenderDish>
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments}></RenderComments>
          </div>
        </div>
      </div>
    );
  }

export default DishDetail;
