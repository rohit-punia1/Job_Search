/* eslint-disable react/prop-types */
import { Button, Card, CardContent, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const JobCard = ({ item }) => {

  return (
    <Card
      className="card"
      sx={{
        maxWidth: 360,
        height: "100% !important",
        position: "relative !important",
        borderRadius: "20px !important",
        padding: "5px !important",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      }}
    >
      <CardContent style={{ paddingBottom: 8 }}>
        <div
          style={{
            boxShadow: "rgba(6, 6, 6, 0.05) 0px 2px 6px 0px",
            borderRadius: "10px",
            border: "1px solid rgb(230, 230, 230)",
            fontWeight: 300,
            lineHeight: 1.5,
            fontSize: "9px",
            maxWidth: 100,
            padding: "4px 6px",
          }}
        >
          ⏳<span>Posted 30 days ago</span>
        </div>

        <div style={{ padding: "8px 16px" }}>
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: -10 }}>
            <img src={item.logoUrl} style={{ height: "2.5rem", width: 25 }} />
            <div>
              <Typography
                variant="h3"
                gutterBottom
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  letterSpacing: 1,
                  marginBottom: 3,
                  color: "#8b8b8b",
                }}
              >
                {item?.companyName}
              </Typography>
              <Typography
                variant="h2"
                gutterBottom
                style={{
                  fontSize: "14px",
                  lineHeight: 1.5,
                }}
              >
                {item.jobRole}
              </Typography>

              <p style={{ fontSize: 11, fontWeight: 400, marginTop: 5 }}>
                {item.location}
              </p>
            </div>
          </div>
          <p
            style={{
              fontWeight: 300,
              margin: "8px 0px",
              color: "rgb(77, 89, 106)",
            }}
          >
            Estimated Salary: ₹{item.minJdSalary ||0} - {item.maxJdSalary} LPA <span>✅</span>
          </p>

          <div
            style={{
              height: 265,
              overflow: "hidden",
              maskImage:
                "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "1rem",
                lineHeight: "1.5",
                fontWeight: 400,
              }}
            >
              About Company:
            </p>
            <div style={{ whiteSpace: "pre-wrap", fontSize: 14 }}>
              <p style={{ margin: 0 }}>
                <strong>About us</strong>
              </p>
              <p style={{ marginBottom: 0, marginTop: 0 }}>
                <span style={{ fontWeight: 300 }}>
                  {item.jobDetailsFromCompany}
                </span>
              </p>

              <p style={{ fontSize: 14 }}>
                <strong>Founder/Recruiter profiles:</strong>
              </p>
              <p>
                <a
                  style={{
                    color: "#4943da",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                ></a>
              </p>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginBottom: "0.5rem",
              position: "relative",
              top: -20,
            }}
          >
            <a
              style={{
                color: "#4943da",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "400",
              }}
              href={item.jdLink}
            >
              View job
            </a>
          </div>
          <div>
            <h3
              style={{
                marginTop: 10,
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: 1,
                marginBottom: 3,
                color: "#8b8b8b",
              }}
            >
              Minimum Experience
            </h3>
            <p style={{ margin: 0, fontSize: 14 }}>{item.minExp} years</p>
          </div>
        </div>
        <Button
          style={{
            width: "100%",
            backgroundColor: "rgb(85, 239, 196)",
            marginTop: 10,
            fontWeight: 500,
            padding: "8px 18px",
            color: "black",
            borderRadius: 8,
          }}
        >
          ⚡ Easy Apply
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
