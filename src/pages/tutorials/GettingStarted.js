import React, { Component } from 'react';

const Page = () => (
  <div className="main container">
    <div className="row">
        <div className="col-md-3">
          <ul>
            <li><a href="#authentication">Authentication</a></li>
            <li><a href="#medias">Media Types</a></li>
            <li><a href="#codes">Response Codes</a></li>
            <li><a href="#errors">Error Status</a></li>
            <li><a href="#limits">Rate limits</a></li>
            <li><a href="#paging">Paging</a></li>
          </ul>
        </div>
        <div className="col-md-9">
          <div id="authentication">
            <h1>Authentication</h1>
            <p>You can choose one of the following ways to authenticate and have access to the API resources. We strongly recommend using the <code>OAuth2ClientSecurity</code> authentication whether it is possible.</p>
            <h2>ApiKey</h2>
            <p>It is done by sending an <code>Authorization</code> header with the text <code>ApiKey</code> followed by the API key of the client. If you need an API key, please contact us on <code><a>orders_it@edenhome.com</a></code>.</p>
            <p>Example:</p>
            <pre><code>curl -X POST &quot;https://listings-api.edenhome.com/api/v1/listings/b4fffb2e-8cc9-4f2d-a915-7443555692d6&quot; \
                -H &quot;Authorization: ApiKey 47913DAC-4DDD-4A58-B54F-A2BE39A76EB5&quot;
            </code></pre>
            <h2>OAuth2ClientSecurity</h2>
            <p>It is done by sending an <code>Authorization</code> header with the text <code>Bearer</code> followed by the client access token.</p>
            <p>Example:</p>
            <pre><code>curl -X POST &quot;https://listings-api.edenhome.com/api/v1/listings/b4fffb2e-8cc9-4f2d-a915-7443555692d6&quot; \
                -H &quot;Authorization:Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1d&quot;
            </code></pre>
            <h3>Getting a client access token</h3>
            <p>You can get your <a href="https://jwt.io">JWT</a> client access token calling our <a href="http://docs.ehidentity.apiary.io">Identity API</a> by sending an <code>Authorization</code> header with the text <code>Basic</code> followed by a base64 encoded string of <code>clientId:secret</code>.</p>
            <p>If you need a <code>clientId</code> and a <code>secret</code> please contact us on <code><a>orders_it@edenhome.com</a></code>. For more information about what a client access token is, please read our <a href="http://docs.ehidentity.apiary.io">Identity API documentation</a></p>
            <p>Example:</p>
            <pre><code> curl &quot;https://identity-api.edenhome.com/connect/token&quot; \
                -H &quot;Authorization: Basic c3VwcG9ydEBwcm9wZXJzdGFyLmNvLnVrOjEyMzQ1Njc4&quot; \
                -d &quot;grant_type=client_credentials&amp;scope=listings_api&quot;
            </code></pre>
            <p>which, using <code>curl</code>, is equivalent to:</p>
            <pre><code>curl &quot;https://identity-api.edenhome.com/connect/token&quot; \
                -u &quot;support@properstar.co.uk:EClusMEUk8&quot; \
                -d &quot;grant_type=client_credentials&amp;scope=listings_api&quot;
            </code></pre>
            <p>Tokens are expired after 1 hour and after this time a new token must be generated.</p>
          </div>
          <div id="medias">
            <h2>Media Types</h2>
            <p>This API use JSON format to represent resources. When sending content on PUT/POST requests, you must specify the follow header:</p>
            <pre><code>Content-Type: application/json
            </code></pre>
          </div>
          <div id="codes">
            <h2>Response Codes</h2>
            <p>The common <a href="https://github.com/for-GET/know-your-http-well/blob/master/status-codes.md">HTTP Response Status Codes</a> are used:</p>
            <ul>
            <li>200 (OK) - GET and PATCH methods</li>
            <li>201 (Created) - POST methods</li>
            <li>204 (No content) - DELETE methods.</li>
            </ul>
          </div>
          <div id="errors">
            <h2>Error Status</h2>
            <p>When something goes wrong, the response status code can be <code>4xx</code> if the error is related to the request structure or <code>5xx</code> if it’s our server’s fault.</p>
            <p>Examples:</p>
            <ul>
            <li>
            <p>400 (Bad request) - Example: <code>PUT /listings</code>, when endpoint does not exist.</p>
            </li>
            <li>
            <p>401 (Unauthorized) - Example: <code>GET /listings/b4fffb2e-8cc9-4f2d-a915-7443555692d6</code>, when you did not specify a valid client access token.</p>
            </li>
            <li>
            <p>404 (Not found) - Example: <code>GET /listings/72606e99-34fa-4cce-9f1e-f7df5b492192</code>, when the id <code>72606e99-34fa-4cce-9f1e-f7df5b492192</code> does not exist.</p>
            </li>
            <li>
            <p>415 (Unsupported media type) - Example: <code>PATCH /listings/b4fffb2e-8cc9-4f2d-a915-7443555692d6</code>, when the Content-Type header is not defined.</p>
            </li>
            <li>
            <p>500 (Internal server error) - Example: When a request throws an unexpected error. If you see this status code, please contact us: <code><a>orders_it@edenhome.com</a></code>.</p>
            </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
)

export default Page;
