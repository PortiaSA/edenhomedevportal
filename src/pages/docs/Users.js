import React, { Component } from 'react';
import ApiaryDocumentation from '../../components/ApiaryDocumentation';
import ReferenceNavigation from '../../components/ReferenceNavigation';

const Page = () => (
  <div>
    <ReferenceNavigation />
    <ApiaryDocumentation subdomain="ehusers" />
  </div>
)

export default Page;
