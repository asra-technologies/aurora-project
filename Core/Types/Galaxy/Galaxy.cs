using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Types.Galaxy
{
    public class Galaxy
    {
        public List<StarSystem> Systems { get; protected set; }
        public int Position { get; protected set; }

        Galaxy()
        {

        }
    }
}
