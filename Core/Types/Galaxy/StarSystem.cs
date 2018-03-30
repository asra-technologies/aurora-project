using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Types.Galaxy
{
    public class StarSystem
    {
        public List<Planet> Planets { get; protected set; }
        public int Position { get; protected set; }
    }
}
