import React, { Component } from 'react';
import ApiaryDocumentation from '../../components/ApiaryDocumentation';
import ReferenceNavigation from '../../components/ReferenceNavigation';

const Page = () => (
  <div>
    <ReferenceNavigation />
    <ApiaryDocumentation subdomain="ehcurrencies" />
  </div>
)

export default Page;
