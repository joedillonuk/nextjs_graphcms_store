import { useState, useEffect } from 'react';
import Head from 'next/head'
import { FaExternalLinkAlt } from 'react-icons/fa';
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";


import Layout from '@components/Layout';
import Container from '@components/Container';
import Button from '@components/Button';
import Mymap from '@components/Mymap/index.js';

import styles from '@styles/Page.module.scss'


const position = [51.505, -0.09];


export default function Stores({ storeLocations }) {

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Container>
        <h1>Locations</h1>

        <div className={styles.stores}>

          <div className={styles.storesLocations}>
            <ul className={styles.locations}>
              {storeLocations.map(location => {
                return (
                  <li key={location.id}>
                    <p className={styles.locationName}>
                      {location.name}
                    </p>
                    <address>
                      {location.address}
                    </address>
                    <p>
                      {location.phoneNumber}
                    </p>
                    <p className={styles.locationDiscovery}>
                      <button>
                        View on Map
                      </button>
                      <a href={`https://www.google.com/maps/dir//${location.location.latitude},${location.location.longitude}/@${location.location.latitude},${location.location.longitude},16z`} target="_blank" rel="noreferrer">
                        Get Directions
                        <FaExternalLinkAlt />
                      </a>
                    </p>
                  </li>

                )
              })}

            </ul>
          </div>

          <div className={styles.storesMap}>
            <div className={styles.storesMapContainer}>
              Map goes here
                  <Mymap />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://api-eu-west-2.graphcms.com/v2/cl59yfpuk686r01t3fpmhggiq/master',
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query PageStores {
  storeLocations {
    address
    id
    name
    phoneNumber
    location {
      latitude
      longitude
    }
  }
}
    `
  })

  const storeLocations = data.data.storeLocations;

  return {
    props: {
      storeLocations
    }
  }
}