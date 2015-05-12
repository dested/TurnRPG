using System;
using System.Collections;
using System.Collections.Generic;

namespace TurnRPG.Client.Utils
{
    public static class EnumerableExtensions
    {
        public static int IndexOfFast(this List<int> items, int ind)
        {
            for (int index = 0; index < items.Count; index++)
            {
                var item = items[index];
                if (item == ind) return index;
            }
            return -1;
        }
        public static int IndexOfFast(this int[] items, int ind)
        {
            for (int index = 0; index < items.Length; index++)
            {
                var item = items[index];
                if (item == ind) return index;
            }
            return -1;
        }

        public static T[] Where<T>(this T[] items, Func<T, bool> clause)
        {
            List<T> items2 = new List<T>();

            foreach (var item in items)
            {
                if (clause(item))
                {
                    items2.Add(item);
                }
            }
            return items2.ToArray();
        }

        public static T First<T>(this T[] items, Func<T, bool> clause)
        {

            foreach (var item in items)
            {
                if (clause(item))
                {
                    return item;
                }
            }
            return default(T);
        }
        public static bool All<T>(this T[] items, Func<T, bool> clause)
        {
            foreach (var item in items)
            {
                if (!clause(item))
                {
                    return false;
                }
            }
            return true;
        }
        public static T First<T>(this IEnumerable<T> items, Func<T, bool> clause)
        {

            foreach (var item in items)
            {
                if (clause(item))
                {
                    return item;
                }
            }
            return default(T);
        }
        public static bool All<T>(this List<T> items, Func<T, bool> clause)
        {
            foreach (var item in items)
            {
                if (!clause(item))
                {
                    return false;
                }
            }
            return true;
        }
        public static bool Any<T>(this IEnumerable<T> items, Func<T, bool> clause)
        {
            foreach (var item in items)
            {
                if (clause(item))
                {
                    return true;
                }
            }
            return false;
        }
        public static bool Any<T>(this T[] items, Func<T, bool> clause)
        {
            foreach (var item in items)
            {
                if (clause(item))
                {
                    return true;
                }
            }
            return false;
        }
        public static T[] OrderBy<T>(this T[] items, Func<T, int> clause)
        {
            var j = items.Clone();
            j.Sort((a, b) => clause(a).CompareTo(clause(b)));
            return j;
        }
        public static T[] OrderBy<T>(this IEnumerable<T> items, Func<T, int> clause)
        {
            var j = items.ToArray().Clone();
            j.Sort((a, b) => clause(a).CompareTo(clause(b)));
            return j;
        }
        public static T[] OrderBy<T>(this T[] items, Func<T, string> clause)
        {
            var j = items.Clone();
            j.Sort((a, b) => clause(a).CompareTo(clause(b)));
            return j;
        }
        public static T[] OrderBy<T>(this IEnumerable<T> items, Func<T, string> clause)
        {
            var j = items.ToArray().Clone();
            j.Sort((a, b) => clause(a).CompareTo(clause(b)));
            return j;
        }
        public static T[] OrderBy<T>(this T[] items, Func<T, double> clause)
        {
            var j = items.Clone();
            j.Sort((a, b) => clause(a).CompareTo(clause(b)));
            return j;
        }
        public static List<T> OrderBy<T>(this IEnumerable<T> items, Func<T, double> clause)
        {
            var j = items.ToArray().Clone();
            j.Sort((a, b) => clause(a).CompareTo(clause(b)));
            return new List<T>(j);
        }
        public static T[] ToArray<T>(this IEnumerable<T> items)
        {
            var ts = new List<T>();

            foreach (var item in items)
            {
                ts.Add(item);
            }
            return ts.ToArray();
        }



        public static T2[] Select<T, T2>(this T[] items, Func<T, T2> clause)
        {
            List<T2> items2 = new List<T2>();

            foreach (var item in items)
            {
                items2.Add(clause(item));
            }
            return items2.ToArray();
        }



        public static T[] Where<T>(this IEnumerable<T> items, Func<T, bool> clause)
        {
            List<T> items2 = new List<T>();

            foreach (var item in items)
            {
                if (clause(item))
                {
                    items2.Add(item);
                }
            }
            return items2.ToArray();
        }

        public static T2[] Select<T, T2>(this List<T> items, Func<T, T2> clause)
        {
            List<T2> items2 = new List<T2>();

            foreach (var item in items)
            {
                items2.Add(clause(item));
            }
            return items2.ToArray();
        }


        public static T Last<T>(this IEnumerable<T> items)
        {
            var last = default(T);
            foreach (var item in items)
            {
                last = item;
            }
            return last;
        }

        public static T First<T>(this IEnumerable<T> items)
        {
            foreach (var item in items)
            {
                return item;
            }
            return default(T);
        }

        public static List<GroupByItem<T, T2>> GroupBy<T, T2>(this IEnumerable<T> items, Func<T, T2> predicate)
        {
            var ts = new Dictionary<T2, List<T>>();

            foreach (var item in items)
            {
                var j = predicate(item);
                if (!ts.ContainsKey(j))
                {
                    ts.Add(j, new List<T>());
                }
                ts[j].Add(item);
            }
            var ritems = new List<GroupByItem<T, T2>>();

            foreach (var t in ts)
            {
                ritems.Add(new GroupByItem<T, T2>(t.Key, t.Value));
            }
            return ritems;
        }



        public static List<T2> SelectMany<T, T2>(this List<T> items, Func<T, List<T2>> clause)
        {
            var items2 = new List<T2>();

            foreach (var item in items)
            {
                items2.AddRange(clause(item));
            }
            return items2;
        }

        public static int Count<T>(this T[] items, Func<T, bool> clause)
        {
            var j = 0;
            foreach (var item in items)
            {
                if (clause(item)) j++;
            }
            return j;
        }

        public static T ElementAt<T>(this IEnumerable<T> items, int index)
        {
            var i = 0;
            foreach (var item in items)
            {
                if (i == index)
                {
                    return item;
                }
                i++;
            }
            return default(T);
        }

    }
    public class GroupByItem<T, T2> : IEnumerable<T>
    {
        protected internal GroupByItem(T2 key, List<T> values)
        {
            Key = key;
            Values = values;
        }

        public T2 Key { get; set; }
        public List<T> Values { get; set; }

        public IEnumerator<T> GetEnumerator()
        {
            return Values.GetEnumerator();
        }


        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }

}