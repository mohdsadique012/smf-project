import React from "react";
import "./AdminSidebar.css";
import { Container, Row } from "react-bootstrap";
export default function AdminSidebar() {
  return (
    <>
      <Row>
        <div className="user-banner"></div>
      </Row>
      <Container>
        <div class="flex-shrink-0 p-3 custom-sidebar">
          <h5>Go Quickly to: </h5>
          {/* <a
            href="/"
            class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
          >
            <svg class="bi pe-none me-2" width="30" height="24"></svg>
            <span class="fs-5 fw-semibold">User Name</span>
          </a> */}
          <ul class="list-unstyled ps-0 pt-3">
            <li class="mb-1">
              <button
                class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#account-collapse"
                aria-expanded="true"
              >
                Account
              </button>
              <div class="collapse show" id="account-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  {/* <li>
                    <a
                      href="#"
                      class="link-dark d-inline-flex text-decoration-none rounded"
                    >
                      New...
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="/UserProfile"
                      class="link-dark d-inline-flex text-decoration-none rounded"
                    >
                      Profile
                    </a>
                  </li>
                  
                  <li>
                    <a
                      href="#"
                      class="link-dark d-inline-flex text-decoration-none rounded"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="link-dark d-inline-flex text-decoration-none rounded"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/* <li class="mb-1">
            <button
              class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="false"
            >
              Home
            </button>
            <div class="collapse show" id="home-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a
                    href="#"
                    class="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Updates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Reports
                  </a>
                </li>
              </ul>
            </div>
          </li> */}
            <li class="mb-1">
              <button
                class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="false"
              >
                Dashboard
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a
                      href="#"
                      class="link-dark d-inline-flex text-decoration-none rounded"
                    >
                      Overview
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="link-dark d-inline-flex text-decoration-none rounded"
                    >
                      Weekly
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="link-dark d-inline-flex text-decoration-none rounded"
                    >
                      Monthly
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="link-dark d-inline-flex text-decoration-none rounded"
                    >
                      Annually
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="mb-1">
              <button
                class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#orders-collapse"
                aria-expanded="false"
              >
                Orders
              </button>
              <div class="collapse" id="orders-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <a
                      href="#"
                      class="link-dark d-inline-flex text-decoration-none rounded"
                    >
                      New
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="link-dark d-inline-flex text-decoration-none rounded"
                    >
                      Processed
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="link-dark d-inline-flex text-decoration-none rounded"
                    >
                      Shipped
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="link-dark d-inline-flex text-decoration-none rounded"
                    >
                      Returned
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
}
