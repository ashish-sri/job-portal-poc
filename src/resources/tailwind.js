const HOMEPAGEMAINFLEX="flex justify-center flex-col ";
const CONTENTFLEX="flex flex-wrap justify-center ";
const JOBTILEFLEX="flex justify-start flex-wrap ";
const ICONCOLUMNFLEX="flex justify-between flex-col ";
const INFOCOLUMNFLEX=HOMEPAGEMAINFLEX;
const GROUP1FLEX=HOMEPAGEMAINFLEX;
const GROUP2FLEX=HOMEPAGEMAINFLEX;
const HEADERFLEX="flex justify-start ";
const FLEXBUTTONDIV="flex justify-end ";
const FLEXFULLSCREENPOPUP=HOMEPAGEMAINFLEX;
const FLEXPOPUPROW="flex justify-center ";
const FLEXPOPUPWINDOW=ICONCOLUMNFLEX;
const FLEXPOPUPFORM=ICONCOLUMNFLEX;
const FLEXPOPUPHEADER="flex items-center justify-between";
const FLEXPOPUPINPUT="flex flex-col ";
const FLEXFORMDIV="flex justify-between ";
const FLEXRADIO=FLEXPOPUPINPUT;
const FLEXRADIOROW="flex "
const FLEXFIRSTRADIOROW=FLEXRADIOROW;

const HOMEPAGEZINDEX="z-0 ";
const ZINDEXPOPUP="z-10 "

const CONTENTGAP="gap-6 ";

const BORDERBOX="box-border ";
const BORDER="border ";
const POSITIONFIXED="fixed ";
const BLOCK="block "
const TOP0="top-0 ";
const BOTTOM0="bottom-0 ";
const LEFT0="left-0 ";
const RIGHT0="right-0 ";
const WIDTHFULL="w-full "

const TILEHEIGHT="h-[320px] ";
const TILEWIDTH="w-[830px] ";
const TILEBUTTONHEIGHT="h-[40px] ";
const TILEBUTTONWIDTH="w-[150px] ";
const HEIGHTPOPUPWINDOW="h-[564px] ";
const WIDTHPOPUPWINDOW="w-[577px] ";

const SPACEY1="space-y-1 ";
const SPACEY2="space-y-2 ";
const SPACEY6="space-y-6 ";
const SPACEX1="space-x-1 ";
const SPACEX2="space-x-2 ";
const SPACEX6="space-x-6 ";
const SPACEX4="space-x-4 ";

const PADDINGX2="px-2 ";
const PADDINGX4="px-4 ";
const PADDINGX6="px-6 ";
const PADDING31="p-[31px] ";

const PADDINGY1="py-1 ";
const PADDINGY2="py-2 ";
const PADDINGY4="py-4 ";
const PADDINGY6="py-6 ";
const PADDINGLEFT6="pl-6 "

const TEXTSIZEBASE="text-base ";
const TEXTSIZESMALL="text-sm ";
const TEXTSIZEMEDIUM="text-md ";
const TEXTSIZELARGE="text-lg ";
const TEXTSIZEXL="text-xl " 
const TEXTSIZE2XL="text-2xl ";

const TEXTCOLORPRIMARY="text-primary ";
const TEXTCOLORPLACEHOLDER="text-placeholder "
const TEXTCOLORWARNING="text-primary-error "
const TEXTCOLORPRIMARYWHITE="text-primary-white ";

const FONTWEIGHTSEMIBOLD="font-semibold "

const BACKGROUNDCOLORPRIMARY="bg-primary ";
const BACKGROUNDCOLORCARD="bg-card "
const BACKGROUNDCOLORPRIMARYWHITE="bg-primary-white ";

const BORDERCOLORPRIMARY="border-primary ";
const BORDERCOLORPLACEHOLDER="border-placeholder ";
const BORDERROUNDSIZEMEDIUM="rounded-md ";
const BORDERROUNDSIZELARGE="rounded-lg ";
const BORDERSIZEBOTTOM="border-b-2 ";
const BORDERROUNDSIZE32="rounded-[32px] ";

const HOVERTEXTCOLORPRIMARY="hover:text-primary ";
const HOVERBACKGROUNDCOLORPRIMARYWHITE="hover:bg-primary-white ";
const HOVERTEXTCOLORPRIMARYWHITE="hover:text-primary-white ";
const HOVERBACKGROUNDCOLORPRIMARY="hover:bg-primary ";

const PLACEHOLDERTEXTCOLOR="placeholder:text-placeholder ";
const PLACEHOLDERTEXTSIZESMALL="placeholder:text-sm "

export default {
    TAILWIND:{
        HOMEPAGE:{
            FULLSCREENPOPUP:{
                FLEX:FLEXFULLSCREENPOPUP,
                POSITION:POSITIONFIXED,
                TOP:TOP0,
                BOTTOM:BOTTOM0,
                LEFT:LEFT0,
                RIGHT:RIGHT0,
                ZINDEX:ZINDEXPOPUP,
                ROW:{
                    FLEX:FLEXPOPUPROW
                },
                POPUPWINDOW:{
                    FLEX:FLEXPOPUPWINDOW,
                    BORDERBOX:BORDERBOX,
                    POPUPWINDOWHEIGHT:HEIGHTPOPUPWINDOW,
                    POPUPWINDOWWIDTH:WIDTHPOPUPWINDOW,
                    PADDING:PADDING31,
                    BORDER:BORDER,
                    BORDERROUNDSIZE:BORDERROUNDSIZE32,
                    BACKGROUNDCOLOR:BACKGROUNDCOLORCARD,
                    FORM:{
                        FLEX:FLEXPOPUPFORM,
                        SPACE:SPACEY6,
                        POPUP:{
                            HEADER:{
                                FLEX:FLEXPOPUPHEADER,
                                TITLE:{
                                    TEXTSIZE:TEXTSIZEXL,
                                    FONTWEIGHT:FONTWEIGHTSEMIBOLD
                                },
                                SUBTITLE:{
                                    TEXTSIZE:TEXTSIZELARGE,
                                    FONTWEIGHT:FONTWEIGHTSEMIBOLD
                                }
                            },
                            FORMINPUT:{
                                FLEXPOPUPINPUT:FLEXPOPUPINPUT,
                                SPACE:SPACEY1,
                                WIDTH:WIDTHFULL,
                                TITLE:{
                                    TEXTSIZE:TEXTSIZESMALL,
                                    FONTWEIGHT:FONTWEIGHTSEMIBOLD,
                                    WARNING:{
                                        WARNINGTEXTCOLOR:TEXTCOLORWARNING
                                    }
                                },
                                INPUT:{
                                    TEXTSIZE:TEXTSIZESMALL,
                                    BORDERCOLOR:BORDERCOLORPLACEHOLDER,
                                    PLACEHOLDERTEXTCOLOR:PLACEHOLDERTEXTCOLOR,
                                    PLACEHOLDERTEXTSIZE:PLACEHOLDERTEXTSIZESMALL,
                                    BLOCK:BLOCK,
                                    WIDTH:WIDTHFULL,
                                    BORDER:BORDER,
                                    BORDERROUNDSIZE:BORDERROUNDSIZEMEDIUM,
                                    PADDINGX:PADDINGX2,
                                    PADDINGY:PADDINGY1,
                                }
                            },
                            FORMDIV:{
                                FLEX:FLEXFORMDIV,
                                SPACE:SPACEX6
                            },
                            RADIO:{
                                FLEX:FLEXRADIO,
                                SPACE:SPACEY1,
                                WIDTH:WIDTHFULL,
                                TITLE:{
                                    TEXTSIZE:TEXTSIZESMALL,
                                    FONTWEIGHT:FONTWEIGHTSEMIBOLD
                                },
                                RADIOROW:{
                                    FLEX:FLEXRADIOROW,
                                    SPACEX:SPACEX4,
                                    FIRSTRADIOROW:{
                                        FLEX:FLEXFIRSTRADIOROW,
                                        SPACEX:SPACEX1,
                                        FIRSTRADIOROWTITLE:{
                                            TEXTSIZE:TEXTSIZESMALL
                                        }
                                    }
                                }
                            }
                        }
                    },
                    BUTTONDIV:{
                        FLEX:FLEXBUTTONDIV,
                        POPUPBUTTON:{
                            BACKGROUNDCOLOR:BACKGROUNDCOLORPRIMARY,
                            TEXTCOLOR:TEXTCOLORPRIMARYWHITE,
                            PADDINGX:PADDINGX4,
                            PADDINGY:PADDINGY2,
                            BORDER:BORDER,
                            BORDERCOLOR:BORDERCOLORPRIMARY,
                            BORDERROUNDSIZE:BORDERROUNDSIZEMEDIUM,
                            HOVERTEXTCOLOR:HOVERTEXTCOLORPRIMARY,
                            HOVERBACKGROUNDCOLOR:HOVERBACKGROUNDCOLORPRIMARYWHITE
                        }
                    }
                }
            },
            
            HOMEPAGEMAIN:{
                FLEX:HOMEPAGEMAINFLEX,
                ZINDEX:HOMEPAGEZINDEX,
                NEWJOBBUTTON:{
                    BACKGROUNDCOLOR:BACKGROUNDCOLORPRIMARY,
                    TEXTCOLOR:TEXTCOLORPRIMARYWHITE,
                    PADDINGX:PADDINGX4,
                    PADDINGY:PADDINGY2,
                    BORDER:BORDER,
                    BORDERCOLOR:BORDERCOLORPRIMARY,
                    BORDERROUNDSIZE:BORDERROUNDSIZEMEDIUM,
                    HOVERTEXTCOLOR:HOVERTEXTCOLORPRIMARY,
                    HOVERBACKGROUNDCOLOR:HOVERBACKGROUNDCOLORPRIMARYWHITE
                },
                CONTENT:{
                    FLEX:CONTENTFLEX,
                    GAP:CONTENTGAP,
                    PADDINGY:PADDINGY6,
                    JOBTILE:{ 
                        FLEX:JOBTILEFLEX,
                        SPACE:SPACEX2,
                        BORDERBOX:BORDERBOX,
                        HEIGHT:TILEHEIGHT,
                        WIDTH:TILEWIDTH,
                        PADDINGX:PADDINGX6,
                        PADDINGY:PADDINGY4,
                        BORDER:BORDER,
                        BORDERROUNDSIZE:BORDERROUNDSIZELARGE,
                        BACKGROUNDCOLOR:BACKGROUNDCOLORCARD,
                        ICONCOLUMN:{
                            FLEX:ICONCOLUMNFLEX
                        },
                        INFOCOLUMN:{
                            FLEX:INFOCOLUMNFLEX,
                            SPACE:SPACEY6,
                            GROUP1:{
                                FLEX:GROUP1FLEX,
                                TITLE:{
                                    TEXTSIZE:TEXTSIZE2XL,
                                    FONTWEIGHT:FONTWEIGHTSEMIBOLD
                                },
                                COMPANY:{
                                    TEXTSIZE:TEXTSIZEBASE,
                                    FONTWEIGHT:FONTWEIGHTSEMIBOLD
                                },
                                LOCATION:{
                                    TEXTSIZE:TEXTSIZEBASE,
                                    TEXTCOLOR:TEXTCOLORPLACEHOLDER
                                }
                            },
                            GROUP2:{
                                FLEX:GROUP2FLEX,
                                SPACE:SPACEY2,
                                JOBDESCRIPTION:{
                                    TEXTSIZE:TEXTSIZEBASE,
                                    FONTWEIGHT:FONTWEIGHTSEMIBOLD
                                },
                                EXPERIENCE:{
                                    TEXTSIZE:TEXTSIZEBASE,
                                    FONTWEIGHT:FONTWEIGHTSEMIBOLD
                                },
                                SALARY:{
                                    TEXTSIZE:TEXTSIZEBASE,
                                    FONTWEIGHT:FONTWEIGHTSEMIBOLD
                                },
                                EXPLOYEESNUMBER:{
                                    TEXTSIZE:TEXTSIZEBASE,
                                    FONTWEIGHT:FONTWEIGHTSEMIBOLD
                                },
                            },
                            TILEBUTTON:{
                                APPLYNOW:{
                                    BACKGROUNDCOLOR:BACKGROUNDCOLORPRIMARY,
                                    TEXTCOLOR:TEXTCOLORPRIMARYWHITE,
                                    PADDINGX:PADDINGX4,
                                    PADDINGY:PADDINGY2,
                                    BORDER:BORDER,
                                    BORDERCOLOR:BORDERCOLORPRIMARY,
                                    BORDERROUNDSIZE:BORDERROUNDSIZEMEDIUM,
                                    HOVERTEXTCOLOR:HOVERTEXTCOLORPRIMARY,
                                    HOVERBACKGROUNDCOLOR:HOVERBACKGROUNDCOLORPRIMARYWHITE,
                                    WIDTH:TILEBUTTONWIDTH,
                                    HEIGHT:TILEBUTTONHEIGHT
                                },
                                EXTERNALAPPLY:{
                                    BACKGROUNDCOLOR:BACKGROUNDCOLORPRIMARYWHITE,
                                    TEXTCOLOR:TEXTCOLORPRIMARY,
                                    PADDINGX:PADDINGX4,
                                    PADDINGY:PADDINGY2,
                                    BORDER:BORDER,
                                    BORDERCOLOR:BORDERCOLORPRIMARY,
                                    BORDERROUNDSIZE:BORDERROUNDSIZEMEDIUM,
                                    HOVERTEXTCOLOR:HOVERTEXTCOLORPRIMARYWHITE,
                                    HOVERBACKGROUNDCOLOR:HOVERBACKGROUNDCOLORPRIMARY,
                                    WIDTH:TILEBUTTONWIDTH,
                                    HEIGHT:TILEBUTTONHEIGHT
                                }  
                            },
                        }
                    }
                },
                HEADER:{
                    FLEX:HEADERFLEX,
                    PADDINGY:PADDINGY6,
                    PADDINGLEFT:PADDINGLEFT6,
                    BACKGROUNDCOLOR:BACKGROUNDCOLORPRIMARYWHITE,
                    BOTTOMBORDERSIZE:BORDERSIZEBOTTOM,
                    BORDERCOLOR:BORDERCOLORPRIMARY
                }
            }
        }
    }
}
