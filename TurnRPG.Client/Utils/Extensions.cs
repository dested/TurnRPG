﻿using System;
using System.Collections.Generic;
using System.Html;
using System.Runtime.CompilerServices;

namespace TurnRPG.Client.Utils
{
    public static class Extensions
    {
        [InlineCode("{o}")]
        public static dynamic Me(this object o)
        {
            return o;
        }


        public static void AddEvent(this Element element, string eventName, HtmlEventHandler listener)
        {
            if (element.Me().addEventListener != null)
            {
                element.AddEventListener(eventName, listener, false);
            }
            else
            {
                element.Me().AttachEvent(eventName, listener);
            }

        }
         

        [InlineCode("{o}")]
        public static T Me<T>(this object o)
        {
            return default(T);
        }

        [InlineCode("{o}")]
        public static T[] Array<T>(this List<T> o)
        {
            return new T[0];
        }

        public static List<T> TakeRandom<T>(this List<T> items)
        {


            var ls = new List<T>(items);

            int currentIndex = ls.Count,
             randomIndex;
            T temporaryValue;

            // While there remain elements to shuffle...
            while (currentIndex != 0)
            {

                // Pick a remaining element...
                randomIndex = (int)Math.Floor(Math.Random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = ls[currentIndex];
                ls[currentIndex] = ls[randomIndex];
                ls[randomIndex] = temporaryValue;
            }
            return ls;
        }


        public static string Percent(this int num)
        {
            return num + "%";
        }

        public static string Percent(this double num)
        {
            return num + "%";
        }

    }
}