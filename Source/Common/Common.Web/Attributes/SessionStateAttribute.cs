namespace Common.Web.Attributes
{
    using System;
    using System.Web.SessionState;

    [AttributeUsage(AttributeTargets.Method, AllowMultiple = false, Inherited = true)]
    public sealed class SessionStateAttribute : Attribute
    {
        public SessionStateBehavior Behavior { get; private set; }

        public SessionStateAttribute(SessionStateBehavior behavior)
        {
            this.Behavior = behavior;
        }
    }
}
