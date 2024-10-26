
<aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
    <div class="app-brand demo"><br><br><br><br>
        <a href="{{ route("home") }}" class="app-brand-link">
            <span class="app-brand-logo d-none">
                <img src="" alt="" height="40">
            </span>
              <span class="app-brand-text demo menu-text fw-bold">REDS HRMIS</span>
          </a>

          <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto">
            <i class="align-middle ti menu-toggle-icon d-none d-xl-block ti-sm"></i>
            <i class="align-middle ti ti-x d-block d-xl-none ti-sm"></i>
          </a>
    </div>
    <div class="menu-inner-shadow"></div>
    <ul class="py-1 menu-inner">
        <li class="menu-item {{ Route::is('home') ? 'bg-white' : null }}">
            <a href="{{route('home')}}" wire:navigate="home" class="menu-link">
                <i class="menu-icon tf-icons ti ti-dashboard"></i>
                <div data-i18n="Dashboard">Dashboard</div>
            </a>
        </li>
        @if(\Illuminate\Support\Facades\Auth::user()->userType == 'ADMIN' || \Illuminate\Support\Facades\Auth::user()->userType == 'HR')
        <li class="menu-item {{ Route::is('upgradingletter') ? 'bg-white' : null }}">
            <a href="{{route('upgrading.list')}}" wire:navigate="upgradingletter"
               class="menu-link">
                <i class="float-left mx-2 fas fa-tachometer-alt"></i>
                <div data-i18n="Upgrading">Upgrading</div>
            </a>
        </li>
        <li class="menu-item {{ Route::is('studyleave.list') ? 'bg-white' : null }}">
            <a href="{{route('studyleave.list')}}" wire:navigate="upgradingletter"
               class="menu-link">
                <i class="float-left mx-2 fas fa-school"></i>
                <div data-i18n="Upgrading">Study Leave</div>
            </a>
        </li>
        @endif

        <li class="menu-item {{ Route::is('changepassword') ? 'bg-white' : null }} ">
            <a class="menu-link" href="changepassword" wire:navigate='changepassword'>
                <i class="float-left mx-2 fas fa-table"></i>
                <div data-i18n="Change Password">Change Password</div>
            </a>
        </li>
        <li class="menu-item">
            <a class="menu-link" href="#" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                <i class="float-left mx-2 fas fa-power-off"></i>
                <div data-i18n="Logout">Logout</div>
            </a>
        </li>
    </ul>
</aside>
