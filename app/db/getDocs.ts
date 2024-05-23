import { Databases } from "appwrite";

import { appwriteClient } from "@/app/db/client";
import { AboutConductDoc, AboutDoc } from "../types";

export const getAboutOverviewDocs = async (): Promise<AboutDoc[]> => {
  try {
    const db = new Databases(appwriteClient);
    const response = await db.listDocuments("pages", "about-overview");

    //@ts-ignore
    return response.documents;
  } catch (error) {
    console.error("Error fetching documents:", error);
    return [];
  }
};

export const getAboutVisionDocs = async (): Promise<AboutDoc[]> => {
  try {
    const db = new Databases(appwriteClient);
    const response = await db.listDocuments("pages", "about-vision");

    //@ts-ignore
    return response.documents;
  } catch (error) {
    console.error("Error fetching documents:", error);
    return [];
  }
};

export const getAboutValuesDocs = async (): Promise<AboutDoc[]> => {
  try {
    const db = new Databases(appwriteClient);
    const response = await db.listDocuments("pages", "about-values");

    //@ts-ignore
    return response.documents;
  } catch (error) {
    console.error("Error fetching documents:", error);
    return [];
  }
};

export const getAboutConductDocs = async (): Promise<AboutConductDoc[]> => {
  try {
    const db = new Databases(appwriteClient);
    const response = await db.listDocuments("pages", "about-conduct");

    //@ts-ignore
    return response.documents;
  } catch (error) {
    console.error("Error fetching documents:", error);
    return [];
  }
};
