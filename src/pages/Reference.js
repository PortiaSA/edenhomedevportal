import React, { Component } from 'react';

import DocumentationLink from '../components/DocumentationLink';
import ReferenceNavigation from '../components/ReferenceNavigation';

const Page = () => (
  <div>
    <ReferenceNavigation />
    <div className="main container">
      <div className="row">
        <div className="col-md-3">
          <div className="intro">
            <h2>List of references</h2>
            <p><b>API reference</b> documents all the REST APIs you can use to build your app with EdenHome services.</p>
          </div>
        </div>
        <div className="col-md-9">
          <DocumentationLink apiName="Accounts" apiDescription="Manage your companies and your branches with our Accounts API." apiPage="accounts" />
          <DocumentationLink apiName="Users" apiDescription="Manage your users inside your accounts and define their roles in your organization" apiPage="users" />
          <DocumentationLink apiName="Identity" apiDescription="Connect your users to an application with email and password or social networks" apiPage="identity" />
          <DocumentationLink apiName="Listings" apiDescription="This documentation explains how to create, edit and delete listings for your account" apiPage="listings" />
          <DocumentationLink apiName="Search" apiDescription="Search, filter and sort listings based on their types and their locations" apiPage="search" />
          <DocumentationLink apiName="GIS" apiDescription="Find all the places around the world to use as reference for our listings with our GIS API" apiPage="gis" />
          <DocumentationLink apiName="Events" apiDescription="Record events and actions on your application with our Events API" apiPage="events" />
          <DocumentationLink apiName="Statistics" apiDescription="Get insights on your business and the performances of your listings with our Statistics API" apiPage="statistics" />
          <DocumentationLink apiName="Requests" apiDescription="Save a request (or lead) from a user for an available listing. It will be sent to the agent in charge." apiPage="requests" />
          <DocumentationLink apiName="Notifications" apiDescription="Send emails, SMS or push notifications with the Notifications API" apiPage="notifications" />
          <DocumentationLink apiName="Feeds" apiDescription="Configure your feed to import automatically your listings from your CRM" apiPage="feeds" />
          <DocumentationLink apiName="Publishers" apiDescription="Get all the available networks and define where your listings should be published" apiPage="publishers" />
          <DocumentationLink apiName="Contents" apiDescription="Contents contain the structure of our articles and posts, but also all the dicos used for the i18n of your app." apiPage="contents" />
          <DocumentationLink apiName="Currencies" apiDescription="Convert your prices in all currencies with the Currencies API" apiPage="currencies" />
          <DocumentationLink apiName="Billing" apiDescription="Billing allows you to manage the subscriptions related to your account" apiPage="billing" />
        </div>
      </div>
    </div>
  </div>
)

export default Page;
